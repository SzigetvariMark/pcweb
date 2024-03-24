import axios from "axios";
import React, { useState } from "react";
import { Button } from "./ui/button";

const ProfileForm = ({
  _id,
  city: existingCity,
  phoneNumber: existingPhoneNUmber,
  address: existingAddress,
  postalCode: existingPostalCode,
  floor: existingFloor,
  door: existingDoor,
  user,
}) => {
  const [city, setCity] = useState(existingCity || "");
  const [phoneNumber, setPhoneNumber] = useState(existingPhoneNUmber || "");
  const [address, setAddress] = useState(existingAddress || "");
  const [postalCode, setPostalCode] = useState(existingPostalCode || "");
  const [floor, setFloor] = useState(existingFloor || "");
  const [door, setDoor] = useState(existingDoor || "");

  async function saveInforamtion(ev) {
    ev.preventDefault();
    try {
      const data = {
        city,
        phoneNumber,
        address,
        postalCode,
        floor,
        door,
        user,
      };
      if (_id) {
        axios.put("/api/delivery", { ...data, _id });
      } else {
        await axios.post("/api/delivery", data);
      }
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <form onSubmit={saveInforamtion}>
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
      <div className="flex gap-12 items-center mt-4">
        <h2>Cim:</h2>
        <input
          type="text"
          value={address}
          placeholder="Cim"
          onChange={(ev) => setAddress(ev.target.value)}
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
  );
};

export default ProfileForm;
