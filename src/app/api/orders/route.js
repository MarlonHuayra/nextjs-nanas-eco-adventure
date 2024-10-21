import { NextResponse } from 'next/server';
import { db } from '@/libs/mysql';
import { processImage } from '@/libs/processImage';

// Obtener la lista de pedidos
export async function GET() {
  try {
    const results = await db.query('SELECT * FROM orders');
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

// Agregar un nuevo pedido a la base de datos
export async function POST(request) {
  try {
    const data = await request.json();
    // Validar los campos requeridos, por ejemplo: data.customer_name, data.customer_phone, data.product_id, data.total_price

    // Aquí puedes agregar la lógica para validar los datos del pedido

    // Luego, inserta el pedido en la base de datos
    const result = await db.query('INSERT INTO orders SET?', {
      customer_name: data.customer_name,
      customer_phone: data.customer_phone,
      product_id: data.product_id,
      total_price: data.total_price,
      quantity: data.quantity, // Agrega el campo "quantity"
      // Agregar otros campos según tus necesidades
    
    });

    return NextResponse.json({
      id: result.insertId,
      customer_name: data.customer_name,
      customer_phone: data.customer_phone,
      product_id: data.product_id,
      total_price: data.total_price,
      quantity: data.quantity, // Incluye "quantity" en la respuesta
      // Otros campos agregados
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}