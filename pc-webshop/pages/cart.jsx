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

const cart = () => {
  const router = useRouter();
  const { cartProducts } = useContext(CartContext);
  const [products, setProducts] = useState([]);

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

  return (
    <div className="gap-12 grid grid-cols-3 w-full mt-10">
      <div className="col-span-2 bg-blue-500 rounded-lg p-8">
        {!cartProducts?.length && (
          <div>
            <p className="title">Üres a kosarad</p>
          </div>
        )}
        {products?.length > 0 && (
          <>
            <h2 className="title">Kosár</h2>
            {products.map((items, index) => (
              <div key={index}>
                <Table>
                  <TableCaption>A legutóbbi hozzáadott termékek</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Termék képe</TableHead>
                      <TableHead>Termék neve</TableHead>
                      <TableHead>Ár</TableHead>
                      <TableHead className="text-right">Összeg</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        <img src={items.images} alt="kep" />
                      </TableCell>
                      <TableCell>{items.title}</TableCell>
                      <TableCell>{items.price} Ft</TableCell>
                      <TableCell className="text-right">
                        {cartProducts.filter((id) => id === items._id).length}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            ))}
            <Button variant="outline" className="float-end" onClick={goBack}>
              Vásárlás folytatása
            </Button>
          </>
        )}
      </div>
      {!!cartProducts?.length && (
        <div className="bg-blue-400 rounded-lg p-8">
          <h2 className="title">Szállitási információk</h2>
          <Input className="mt-4" />
          <Input className="mt-4" />
          <Button variant="ghost" className="w-full border text-lg mt-5">
            Tovább a fizetéshez
          </Button>
        </div>
      )}
    </div>
  );
};

export default cart;
