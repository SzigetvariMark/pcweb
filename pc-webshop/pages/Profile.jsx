import { Button } from "@components/ui/button";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FaPenAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Profile = () => {
  const { data: session } = useSession();
  const [deliveryInformation, setDeliveryInformation] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);
  function fetchOrders() {
    axios.get("/api/deliveryinfo").then((result) => {
      setDeliveryInformation(result.data);
    });
  }

  async function deleteOrder(orderId) {
    Swal.fire({
      title: "Biztos vagy benne?",
      text: `Biztos törli a rendelését?`,
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
          await axios.delete(`/api/deliveryinfo?id=${orderId}`);
          fetchOrders();

          Swal.fire("Törlés", "", "Sikeres!");
        } else if (result.isDenied) {
          Swal.fire("Nem let törölve a rendelése", "", "info");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="flex-col">
      <div className="flex gap-32 p-6 mt-6 shadow-xl border rounded-lg max-lg:flex-col max-lg:gap-5 max-lg:items-center">
        <div>
          <h3 className=" bg-white/20 border-l-2 border-blue-400 rounded-md p-2 mb-4 font-semibold text-2xl">
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
        <div className="flex flex-col justify-right items-center mr-20 max-lg:flex-row max-lg:gap-2 max-lg:text-lg max-lg:font-semibold">
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
          <h3 className=" bg-white/20 border-l-2 border-blue-400 rounded-md p-2 mb-4 font-semibold text-2xl">
            Rendelési Információk
          </h3>
          <div className="max-lg:flex max-lg:gap-8 max-lg:justify-center max-lg:items-center max-sm:flex-col">
            {deliveryInformation.map((items, index) => (
              <div
                key={index}
                className="flex justify-between mb-2 items-center max-lg:flex-col max-lg:gap-2 max-lg:items-start "
              >
                <div className="profileOrderList">
                  <p className="Title2">Város:</p>
                  <label className="font-light">{items.city}</label>
                </div>
                <div className="profileOrderList">
                  <p className="Title2">Cim:</p>
                  <label className="font-light">{items.address}</label>
                </div>
                <div className="profileOrderList">
                  <p className="Title2">Irányitószám:</p>
                  <label className="font-light">{items.postal}</label>
                </div>
                <div className="profileOrderList">
                  <p className="Title2">Emelet:</p>
                  <label className="font-light">{items.floor}</label>
                </div>
                <div className="profileOrderList">
                  <p className="Title2">Ajtó:</p>
                  <label className="font-light">{items.door}</label>
                </div>
                <div className="profileOrderList">
                  <p className="Title2">Termék:</p>
                  <label className="font-light">
                    {items.line_items.map((l) => (
                      <>{l.price_data.product_data.name}</>
                    ))}
                  </label>
                </div>
                <Button
                  variant="destructive"
                  className="float-right"
                  onClick={() => deleteOrder(items._id)}
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
