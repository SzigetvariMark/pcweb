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
  const { data: session } = useSession();

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
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

  return (
    <div className="gap-12 grid grid-cols-3 w-full mt-10">
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
            <Button variant="outline" className="float-end" onClick={goBack}>
              Vásárlás folytatása
            </Button>
          </>
        )}
      </div>
      {!!cartProducts?.length && (
        <form className="bg-white shadow-xl rounded-lg p-8">
          <h2 className="title text-center">Szállitási információk</h2>
          <Input
            type="text"
            className="mt-4 hover:border-orange-700"
            placeholder={session?.user.name}
            name={session?.user.name}
            readOnly={"readonly"}
          />
          <Input
            type="email"
            className="mt-4 hover:border-orange-700"
            placeholder={session?.user.email}
            name={session?.user.email}
            readOnly={"readonly"}
          />
          <Input
            type="number"
            className="mt-4 hover:border-orange-700"
            placeholder="Telefonszám"
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            type="text"
            className="mt-4 hover:border-orange-700"
            placeholder="Cím"
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="flex gap-1 mt-4">
            <Input
              type="text"
              placeholder="Emelet"
              onChange={(e) => setFloor(e.target.value)}
            />
            <Input
              type="text"
              className=""
              placeholder="Ajtó"
              onChange={(e) => setDoor(e.target.value)}
            />
          </div>
          <Button variant="ghost" className="w-full border text-lg mt-5">
            Tovább a fizetéshez
          </Button>
          <p className="float-right text-xs font-light italic mt-9 text-orange-700">
            *A sárga mezőket kötelező kitölteni!
          </p>
        </form>
      )}
    </div>
  );
};

export default cart;
