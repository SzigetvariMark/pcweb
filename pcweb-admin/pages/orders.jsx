import Layout from "@components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Orders() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders").then((respone) => {
      setAllOrders(respone.data);
    });
  }, []);

  return (
    <Layout>
      Orders
      <div>
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Phonenumber</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>postal</TableHead>
              <TableHead>floor</TableHead>
              <TableHead>door</TableHead>
              <TableHead>Orders</TableHead>
            </TableRow>
          </TableHeader>
          {allOrders.length > 0 &&
            allOrders.map((items, index) => (
              <TableBody key={index}>
                <TableRow>
                  <TableCell className="font-medium">{items.name}</TableCell>
                  <TableCell>{items.phone}</TableCell>
                  <TableCell>{items.email}</TableCell>
                  <TableCell>{items.city}</TableCell>
                  <TableCell>{items.address}</TableCell>
                  <TableCell>{items.postal}</TableCell>
                  <TableCell>{items.floor}</TableCell>
                  <TableCell>{items.door}</TableCell>
                  <TableCell>
                    {items.line_items.map((l) => (
                      <>
                        {l.price_data.product_data.name} X {l.quantity}
                      </>
                    ))}
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
        </Table>
      </div>
    </Layout>
  );
}
