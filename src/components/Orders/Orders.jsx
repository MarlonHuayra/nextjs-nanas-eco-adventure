"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import html2pdf from "html2pdf.js";

const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);

  // Función para cargar los pedidos
  useEffect(() => {
    const fetchOrders = async () => {
      try {
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

  // Función para imprimir la tabla en PDF
  const handlePrintPDF = () => {
    const element = document.getElementById("print-section"); // Selecciona el contenedor completo
    const button = document.querySelector(".print-hidden"); // Selecciona el botón

    // Oculta el botón antes de la impresión
    if (button) {
      button.style.display = "none";
    }

    const opt = {
      margin: 0.5,
      filename: "orders_table.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf()
      .from(element)
      .set(opt)
      .save()
      .then(() => {
        // Muestra el botón de nuevo después de imprimir
        if (button) {
          button.style.display = "block";
        }
      });
  };

  return (
    <div className="mx-auto max-w-7xl pt-10 px-6" id="exchange-section">
      <div className="table-b bg-navyblue p-8 overflow-x-auto" id="print-section">
        <div className="flex justify-between mb-4">
          <h3 className="text-offwhite text-4xl">Detalles de Compras de Assets</h3>
          <button
            className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6 print-hidden" // Usando clase para ocultar en impresión
            onClick={handlePrintPDF}
          >
            Imprimir PDF
          </button>
        </div>
        <p className="lg:text-lg font-normal text-lightblue mb-16 text-center sm:text-start">Aquí puedes consultar un resumen detallado de cada transacción, incluyendo información clave como el producto adquirido, la cantidad y el total pagado.</p>


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
      <style jsx>{`
        @media print {
          .print-hidden {
            display: none !important; /* Forzar a ocultar el botón en impresión */
          }
        }
      `}</style>
    </div>
  );
};

export default Orders;
