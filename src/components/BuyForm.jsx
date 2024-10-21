"use client";

import { useRef, useState, useEffect } from "react";
import axios from "axios"; //para enviar los datos a db engloba flecht
import { useRouter, useParams } from "next/navigation";

function BuyForm({ product }) {
  const [cantidad, setCantidad] = useState(1);
  const [precioTotal, setPrecioTotal] = useState(product.price);
  const [mensaje, setMensaje] = useState("");
  const [cliente, setCliente] = useState("");
  const [telefono, setTelefono] = useState(""); // Nuevo estado para el teléfono

  const handleCantidadChange = (e) => {
    const nuevaCantidad = parseInt(e.target.value, 10);
    if (nuevaCantidad > 0) {
      setCantidad(nuevaCantidad);
      setPrecioTotal(nuevaCantidad * product.price);
    } else {
      // Si la cantidad es menor que 1, establecerla en 1
      setCantidad(1);
      setPrecioTotal(product.price);
    }
  };

  const handleTelefonoChange = (e) => {
    const inputText = e.target.value;
    // Utilizar una expresión regular para validar que solo contenga números
    if (/^[0-9]*$/.test(inputText)) {
      // Si es un número válido, actualizar el estado del teléfono
      setTelefono(inputText);
      // También puedes borrar el mensaje de error si se muestra uno
      setMensaje("");
    } else {
      // Si no es un número válido, mostrar un mensaje de error
      setMensaje("Número de teléfono inválido. Ingrese solo números.");
    }
  };

  const handleCompra = async () => {
    if (cliente.trim() === "" || telefono.trim() === "") {
      setMensaje("Por favor, completa el nombre del cliente y el teléfono.");
      return;
    }

    if (cantidad < 1) {
      setMensaje("La cantidad debe ser mayor o igual a 1.");
      return;
    }

    //logica de pedidos
    confirm(
      `Confirmar pedido del Cliente : ${cliente} Tel. ${telefono}\n Producto: ${product.name} ${product.price}Bs \n Cantidad ${cantidad} Por un total de: ${precioTotal} Bs`
    );

    // Crear un objeto que contenga los datos del pedido
    const orderData = {
      product_id: product.id, // Aquí debes proporcionar el ID del producto seleccionado
      total_price: precioTotal,
      customer_name: cliente,
      customer_phone: telefono,
      quantity: cantidad,
    };

    try {
      // Enviar los datos a la API utilizando Axios
      const response = await axios.post("/api/orders", orderData);

      // Revisar si el código de estado es 200 o 201
      if (response.status === 200 || response.status === 201) {
        setMensaje("Pedido confirmado con éxito.");
        console.log("Pedido confirmado con éxito.");
      } else {
        setMensaje("Error al confirmar el pedido.");
        console.log("Error al confirmar el pedido.");
      }
    } catch (error) {
      setMensaje("Error al confirmar el pedido: " + error.message);
      console.log("Error al confirmar el pedido: " + error.message);
    }
  };

  //ahora usemos axios para elviar los datos y agregarlos en la tabla ordes

  return (
    <div className="w-3/5 bg-slate-200 mt-4 rounded-lg">
      <form onSubmit={handleCompra} className="m-4">
        <label
          htmlFor="cantidad"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Cantidad:
        </label>
        <input
          name="cantidad"
          type="number"
          value={cantidad}
          onChange={handleCantidadChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
        <label
          htmlFor="precioTotal"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Precio Total:
        </label>
        <input
          name="precioTotal"
          type="text"
          value={precioTotal}
          readOnly
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
        <label
          htmlFor="cliente"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Nombre Cliente:
        </label>
        <input
          name="cliente"
          type="text"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />

        <label
          htmlFor="telefono"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Teléfono:
        </label>
        <input
          name="telefono"
          type="text"
          value={telefono}
          onChange={handleTelefonoChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
        <button
          className="bg-blue-500 hover.bg-blue-700 text-white font.bold py-2 px-4 mt-4 rounded"
          type="submit"
        >
          Agregar al carrito
        </button>
      </form>
      <p className=" text-gray-700 m-4">{mensaje}</p>
    </div>
  );
}

export default BuyForm;
