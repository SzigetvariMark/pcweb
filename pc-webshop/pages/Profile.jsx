import { Button } from "@components/ui/button";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FaPenAlt } from "react-icons/fa";

const Profile = () => {
  const { data: session } = useSession();
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [floor, setFloor] = useState("");
  const [door, setDoor] = useState("");
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

  function saveDeliveryInformation(event) {}

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
      <div className="flex shadow-xl border rounded-lg p-4 mt-6">
        <div>
          <h3 className=" bg-white/20 border-l-2 border-amber-800 rounded-md p-2 mb-4 font-semibold text-2xl">
            Szállitási információ
          </h3>
          <form onSubmit={saveDeliveryInformation}>
            <div className="flex gap-12 items-center">
              <p>Város:</p>
              <input
                type="text"
                value={city}
                placeholder="Város"
                onChange={(ev) => setCity(ev.target.value)}
              />
            </div>
            <div className="flex gap-12 items-center mt-4">
              <p>Telefonszám:</p>
              <input
                type="tel"
                value={phoneNumber}
                placeholder="Telefonszám"
                onChange={(ev) => setPhoneNumber(ev.target.value)}
              />
            </div>
            <div className="flex gap-12 items-center mt-4">
              <h2>Irányitószám:</h2>
              <input
                type="Number"
                value={postalCode}
                placeholder="Irányitószám"
                onChange={(ev) => setPostalCode(ev.target.value)}
              />
            </div>
            <div className="flex gap-2 items-center mt-4">
              <h2>Emelet:</h2>
              <input
                type="text"
                value={floor}
                placeholder="Emelet"
                onChange={(ev) => setFloor(ev.target.value)}
              />
              <h2>Ajtó:</h2>
              <input
                type="text"
                value={door}
                placeholder="Ajtó szám"
                onChange={(ev) => setDoor(ev.target.value)}
              />
            </div>
            <Button type="submit" className="float-end mt-2">
              Mentés
            </Button>
          </form>
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
                <Button variant="destructive" className="float-right">
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
