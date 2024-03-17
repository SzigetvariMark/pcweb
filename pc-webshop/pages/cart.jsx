import { CartContext } from "@components/CartContext";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSession } from "next-auth/react";

const cart = () => {
  const router = useRouter();
  const { cartProducts, addProduct, removeProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [floor, setFloor] = useState("");
  const [door, setDoor] = useState("");
  const [postal, setPostal] = useState("");

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  function goBack() {
    router.push("/");
  }

  function moreOfThisProduct(id) {
    addProduct(id);
  }

  function lessOfThisProduct(id) {
    removeProduct(id);
  }

  async function goToPayment() {
    const response = await axios.post("/api/checkout", {
      name,
      email,
      phone,
      city,
      address,
      floor,
      door,
      postal,
      cartProducts,
    });
    if (response.data.url) {
      window.location = response.data.url;
    }
  }

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  return (
    <div className="gap-12 grid grid-cols-2 w-full mt-10 md:grid-cols-3">
      <div className="col-span-2 bg-white shadow-xl rounded-lg p-8">
        {!cartProducts?.length && (
          <div>
            <p className="title">Üres a kosarad</p>
          </div>
        )}
        {products?.length > 0 && (
          <>
            <h2 className="title">Kosár</h2>
            <div>
              <Table>
                <TableCaption>A legutóbbi hozzáadott termékek</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Termék képe</TableHead>
                    <TableHead>Termék neve</TableHead>
                    <TableHead>Ár</TableHead>
                    <TableHead className="text-center">Darab</TableHead>
                  </TableRow>
                </TableHeader>
                {products.map((items, index) => (
                  <TableBody key={index}>
                    <TableRow>
                      <TableCell className="font-medium">
                        <img src={items.images} alt="kep" />
                      </TableCell>
                      <TableCell>{items.title}</TableCell>
                      <TableCell>
                        {cartProducts.filter((id) => id === items._id).length *
                          items.price}
                        Ft
                      </TableCell>
                      <TableCell className="text-center">
                        {cartProducts.filter((id) => id === items._id).length}
                      </TableCell>
                      <TableCell className="text-right flex flex-col gap-1">
                        <button
                          className="border text-lg hover:bg-slate-200 transition-all"
                          onClick={() => moreOfThisProduct(items._id)}
                        >
                          +
                        </button>
                        <button
                          className="border text-lg font-semibold hover:bg-red-200 transition-all"
                          onClick={() => lessOfThisProduct(items._id)}
                        >
                          -
                        </button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ))}
              </Table>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={goBack}>
                Vásárlás folytatása
              </Button>
              <p>
                Vég összeg:{" "}
                <span className="font-semibold text-lg">
                  {total.toLocaleString("hu-HU", {
                    style: "currency",
                    currency: "HUF",
                  })}
                </span>
              </p>
            </div>
          </>
        )}
      </div>
      {!!cartProducts?.length && (
        <div className="bg-white shadow-xl rounded-lg p-8">
          <h2 className="title text-center">Szállitási információk</h2>
          <Input
            type="text"
            className="mt-4 hover:border-orange-700"
            placeholder="Teljes neved"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            className="mt-4 hover:border-orange-700"
            placeholder="Email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="number"
            className="mt-4 hover:border-orange-700"
            placeholder="Telefonszám"
            value={phone}
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            type="text"
            className="mt-4 hover:border-orange-700"
            placeholder="Város"
            value={city}
            name="city"
            onChange={(e) => setCity(e.target.value)}
          />
          <Input
            type="text"
            className="mt-4 hover:border-orange-700"
            placeholder="Cím"
            value={address}
            name="address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            type="text"
            className="mt-4 hover:border-orange-700"
            placeholder="Irányitószám"
            value={postal}
            name="postal"
            onChange={(e) => setPostal(e.target.value)}
          />
          <div className="flex gap-1 mt-4">
            <Input
              type="number"
              placeholder="Emelet"
              value={floor}
              name="floor"
              onChange={(e) => setFloor(e.target.value)}
            />
            <Input
              type="number"
              className=""
              placeholder="Ajtó"
              value={door}
              name="door"
              onChange={(e) => setDoor(e.target.value)}
            />
          </div>
          <Button
            variant="ghost"
            className="w-full border text-lg mt-5"
            onClick={goToPayment}
          >
            Tovább a fizetéshez
          </Button>
          <p className="float-right text-xs font-light italic mt-9 text-orange-700">
            *A sárga mezőket kötelező kitölteni!
          </p>
        </div>
      )}
    </div>
  );
};

export default cart;
