"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import html2pdf from "html2pdf.js";
import Image from "next/image";

const PlayersList = () => {
  const [usersData, setUsersData] = useState([]);

  // Función para cargar los usuarios
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersResponse = await axios.get(
          "http://localhost:3000/api/firebaseUsers" // Cambia la ruta según sea necesario
        );
        setUsersData(usersResponse.data.users); // Guarda solo la lista de usuarios
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    fetchUsers();
  }, []);

  // Función para imprimir la tabla en PDF
  const handlePrintPDF = () => {
    const element = document.getElementById("print-section");
    const button = document.querySelector(".print-hidden");

    if (button) {
      button.style.display = "none";
    }

    const opt = {
      margin: 0.5,
      filename: "users_table.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf()
      .from(element)
      .set(opt)
      .save()
      .then(() => {
        if (button) {
          button.style.display = "block";
        }
      });
  };

  return (
    <div className="mx-auto max-w-7xl pt-10 px-6" id="exchange-section">
      <div className="table-b bg-navyblue p-8 overflow-x-auto" id="print-section">
        <div className="flex justify-between mb-4">
          <h3 className="text-offwhite text-4xl">Lista de Usuarios</h3>
          <button
            className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6 print-hidden"
            onClick={handlePrintPDF}
          >
            Imprimir PDF
          </button>
        </div>
        <p className="lg:text-lg font-normal text-lightblue mb-16 text-center sm:text-start">
          Aquí puedes consultar un resumen de los usuarios registrados.
        </p>

        <table className="table-auto w-full mt-10">
          <thead>
            <tr className="text-white bg-darkblue rounded-lg">
              <th className="px-4 py-4 font-normal">#</th>
              <th className="px-4 py-4 text-start font-normal">EMAIL</th>
              <th className="px-4 py-4 font-normal">FECHA DE CREACIÓN</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, i) => (
              <tr key={i} className="border-b border-b-darkblue">
                <td className="px-4 py-6 text-center text-white">{i + 1}</td>
                <td className="px-4 py-6 text-center text-white flex items-center justify-start gap-5">
                    <Image
                    src="/images/Table/email.png"
                    alt={user.email}
                    height={50}
                    width={50}
                  />{user.email}</td>

                <td className="px-4 py-6 text-center text-white">
                
                  {new Date(user.creationTime).toLocaleDateString()} {/* Formato de fecha */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        @media print {
          .print-hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PlayersList;
