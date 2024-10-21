"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);

  // Función para cargar los pedidos
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Cargar los pedidos (que ya incluyen los detalles del producto)
        const ordersResponse = await axios.get(
          "http://localhost:3000/api/orders"
        );
        setOrdersData(ordersResponse.data);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="mx-auto max-w-7xl pt-40 px-6" id="exchange-section">
      <div className="table-b bg-navyblue p-8 overflow-x-auto">
        <div className="flex justify-between">
        <h3 className="text-offwhite text-2xl">Detalles de Compras de Assets</h3> <button className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6"> imprimir pdf</button>


        </div>
        <table className="table-auto w-full mt-10">
          <thead>
            <tr className="text-white bg-darkblue rounded-lg">
              <th className="px-4 py-4 font-normal">#</th>
              <th className="px-4 py-4 text-start font-normal">CLIENT</th>
              <th className="px-4 py-4 font-normal">PHONE #</th>
              <th className="px-4 py-4 font-normal">ASSET PRICE $</th>

              <th className="px-4 py-4 font-normal">CANT.</th>
              <th className="px-4 py-4 font-normal text-start">TOTAL $</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order, i) => (
              <tr key={i} className="border-b border-b-darkblue">
                <td className="px-4 py-6 text-center text-white">{i + 1}</td>
                <td className="px-4 py-6 text-center text-white flex items-center justify-start gap-5">
                  <Image
                    src="/images/Table/user.png"
                    alt={order.product_name}
                    height={50}
                    width={50}
                  />
                  {order.customer_name}
                </td>
                <td className="px-4 py-6 text-center text-green">
            
                  {order.customer_phone}
                </td>
                <td className="px-4 py-6 text-center text-white">
                  {order.product_name || "Producto no encontrado"}{" "}
                  {order.product_price?.toLocaleString() || "N/A"} $
                </td>

                <td className="px-4 py-6 text-center text-white">
                  {order.quantity}
                </td>
                <td className="px-4 py-6 text-center text-red flex items-center justify-start gap-5">
                <Image
                    src="/images/Table/dollar.png"
                    alt={order.product_name}
                    height={50}
                    width={50}
                  />
                  {order.total_price?.toLocaleString()} $
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Image
        src={"/images/Table/Untitled.svg"}
        alt="ellipse"
        width={2460}
        height={102}
        className="md:mb-40 md:-mt-6"
      />
    </div>
  );
};

export default Orders;
