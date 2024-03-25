import { Button } from "@components/ui/button";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaPenAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Profile = ({ swal }) => {
  const { data: session } = useSession();
  const [deliveryInformation, setDeliveryInformation] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);
  function fetchCategories() {
    axios.get("/api/deliveryinfo").then((result) => {
      setDeliveryInformation(result.data);
    });
  }

  async function deleteOrder(items) {
    Swal.fire({
      title: "Biztos vagy benne?",
      text: `Biztos törli a rendelését ${items.city}?`,
      imageUrl:
        "https://raw.githubusercontent.com/joschan21/digitalhippo/master/public/hippo-email-sent.png",
      imageHeight: "300",
      showDenyButton: true,
      denyButtonText: "Nem",
      denyButtonColor: "green",
      confirmButtonText: "Igen, Törlöm!",
      confirmButtonColor: "darkred",
      reverseButtons: true,
    })
      .then(async (result) => {
        if (result.isConfirmed) {
          const { _id } = order;
          await axios.delete("/api/deliveryinfo?_id=" + _id);
          fetchCategories();

          swal.fire("Törlés", "", "Sikeres!");
        } else if (result.isDenied) {
          swal.fire("Nem let törölve a rendelése", "", "info");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="flex-col">
      <div className="flex gap-32 p-6 mt-6 shadow-xl border rounded-lg">
        <div>
          <h3 className=" bg-white/20 border-l-2 border-amber-800 rounded-md p-2 mb-4 font-semibold text-2xl">
            Alapvető információ
          </h3>
          <div className="flex gap-12">
            <p>Bejelentkezési e-mail cím:</p>
            <input
              type="text"
              placeholder={session?.user.email}
              readOnly={"readonly"}
              className="px-2 rounded-md"
            />
          </div>
          <div className="flex gap-12 mt-4">
            <p>E-mail elérhetőség:</p>
            <input
              type="text"
              placeholder={session?.user.email}
              readOnly={"readonly"}
              className="px-2 rounded-md"
            />
            <FaPenAlt fontSize={16} className="cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col justify-right items-center mr-20">
          <img
            src={session?.user.image}
            alt="profile picture"
            className="rounded-xl shadow-lg"
          />
          <div>
            <h1 className="mt-2">{session?.user.name}</h1>
          </div>
        </div>
      </div>
      <div className="shadow-xl border rounded-lg p-4 mt-6">
        <div>
          <h3 className=" bg-white/20 border-l-2 border-amber-800 rounded-md p-2 mb-4 font-semibold text-2xl">
            Rendelési Információk
          </h3>
          <div>
            {deliveryInformation.map((items, index) => (
              <div
                key={index}
                className="flex mb-2 items-center max-xl:flex-col"
              >
                <p>Város</p>
                <input
                  type="text"
                  readOnly={"readonly"}
                  className="px-2 rounded-md text-black"
                  placeholder={items.city}
                />
                <p>Cim</p>
                <input
                  type="text"
                  readOnly={"readonly"}
                  className="px-2 rounded-md text-black"
                  placeholder={items.address}
                />
                <p>Irányitószám</p>
                <input
                  type="text"
                  readOnly={"readonly"}
                  className="px-2 rounded-md text-black"
                  placeholder={items.postal}
                />
                <p>Emelet</p>
                <input
                  type="text"
                  readOnly={"readonly"}
                  className="px-2 rounded-md text-black"
                  placeholder={items.floor}
                />
                <p>Ajtó</p>
                <input
                  type="text"
                  readOnly={"readonly"}
                  className="px-2 rounded-md text-black"
                  placeholder={items.door}
                />
                <Button
                  variant="destructive"
                  className="float-right"
                  onClick={() => deleteOrder(items)}
                >
                  Törlés
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
