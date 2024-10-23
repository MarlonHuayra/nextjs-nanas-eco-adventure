"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import html2pdf from "html2pdf.js";
import Image from "next/image";

const ProductsList = () => {
  const [ProductsData, setProductsData] = useState([]);

  // Función para cargar los productos
  useEffect(() => {
    const fetchProductsList = async () => {
      try {
        const productsListResponse = await axios.get(
          "http://localhost:3000/api/products"
        );
        setProductsData(productsListResponse.data);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    fetchProductsList();
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
      filename: "products_table.pdf",
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
          <h3 className="text-offwhite text-4xl">Lista de Assets</h3>

          <button
            className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6 print-hidden" // Usando clase para ocultar en impresión
            onClick={handlePrintPDF}
          >
            Imprimir PDF
          </button>
        </div>
        <p className="lg:text-lg font-normal text-lightblue mb-16 text-center sm:text-start">Explora nuestra lista de assets diseñados para ofrecer valor y flexibilidad en tu juego. Cada recurso ha sido seleccionado con cuidado para mejorar la experiencia visual, auditiva y funcional.</p>

        <table className="table-auto w-full mt-10">
          <thead>
            <tr className="text-white bg-darkblue rounded-lg">
              <th className="px-4 py-4 font-normal">#</th>
              <th className="px-4 py-4 text-start font-normal">ASSETS</th>
              <th className="px-4 py-4 text-start font-normal">DESCRIPCION</th>
              <th className="px-4 py-4 text-start font-normal">PRICE $</th>
            </tr>
          </thead>
          <tbody>
            {ProductsData.map((product, i) => (
              <tr key={i} className="border-b border-b-darkblue">
                <td className="px-4 py-6 text-center text-white">{i + 1}</td>
                
                <td className="px-4 py-6 text-start text-white flex items-center justify-start gap-5">
                  <Image
                    src="/images/Table/gift-box.png"
                    alt={product.name}
                    height={50}
                    width={50}
                  />
                  {product.name}
                </td>
                <td className="px-4 py-6 text-start text-lightblue">
                  {product.description}
                </td>
                <td className="px-4 py-6 text-center text-red flex items-center justify-start gap-5 whitespace-nowrap">
                  <Image
                    src="/images/Table/coin.png"
                    alt={product.product_name}
                    height={50}
                    width={50}
                  />
                  {product.price?.toLocaleString()} $
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        @media print {
          .print-hidden {
            display: none !important; /* Forzar a ocultar el botón en impresión */
          }
        }
        .whitespace-nowrap {
          white-space: nowrap; /* Evita que el texto se divida en varias líneas */
        }
      `}</style>
    </div>
  );
};

export default ProductsList;
