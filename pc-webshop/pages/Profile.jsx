import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FaPenAlt } from "react-icons/fa";

const Profile = () => {
  const { data: session } = useSession();
  const [deliveryInformation, setDeliveryInformation] = useState([]);

  useEffect(() => {
    try {
      axios.get("/api/deliveryinfo").then((response) => {
        setDeliveryInformation(response.data);
      });
    } catch (error) {
      console.log(response.error);
    }
  }, []);

  return (
    <div>
      <div className="flex gap-32 md:flex-row flex-col p-6 mt-6 shadow-xl border rounded-lg">
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
          <div className="flex gap-12 mt-4">
            <p>Telefonszám:</p>
            <input
              type="text"
              placeholder={session?.user.phone}
              readOnly={"readonly"}
              className="px-2 rounded-md"
              name="phonenumber"
            />
            <FaPenAlt fontSize={16} className="cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mr-20">
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
      <div className="flex flex-col shadow-xl border rounded-lg p-6 mt-6">
        <div>
          <h3 className=" bg-white/20 border-l-2 border-amber-800 rounded-md p-2 mb-4 font-semibold text-2xl">
            Szállitási Információk
          </h3>
          <div className="flex gap-12">
            <p>Város</p>
            <input
              type="text"
              readOnly={"readonly"}
              className="px-2 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
