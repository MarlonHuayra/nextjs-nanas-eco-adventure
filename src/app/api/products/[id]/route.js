import { NextResponse } from 'next/server'
import { db } from '@/libs/mysql'
import cloudinary from '@/libs/cloudinary'
import { processImage } from '@/libs/processImage'
import {unlink} from "fs/promises"
//antes puedo consultar una base de datos o hacer un proceso extra

// obtener el contenido de un producto x id
export async function GET(request, { params }) {
	try {
		const result = await db.query('SELECT * FROM product WHERE id = ?', [
			params.id,
		])
		//console.log(result)
		if (result.length === 0) {
			return NextResponse.json(
				{
					message: 'Producto no encontrado',
				},
				{
					status: 404,
				}
			)
		}
		return NextResponse.json(result[0]) // result [0] seria el producto q ha sido encontrado
	} catch (error) {
		return NextResponse.json(
			{
				message: error.message,
			},
			{
				status: 500,
			}
		)
	}
}

//eliminar producto de la bd
export async function DELETE(request, { params }) {
	try {
		const result = await db.query('DELETE FROM product WHERE id = ?', [
			params.id,
		])

		if (result.affectedRows === 0) {
			return NextResponse.json(
				{
					message: 'Producto no encontrado',
				},
				{
					status: 404, //HTTP 404 significa "Not Found" en el protocolo HTTP.
				}
			)
		}
		//console.log(result)
		return new Response(null, { status: 204 })
		//Un estado 204 implica que la solicitud se ha completado con éxito, pero no devuelve ningún contenido en la respuesta.
	} catch (error) {
		return NextResponse.json(
			{
				message: error.message,
			},
			{
				status: 500, //HTTP 500 significa "Internal Server Error" en el protocolo HTTP.
			}
		)
	}
}

//actualizar producto de la bd
export async function PUT(request, { params }) {
	try {
		const data = await request.formData()
		const image = data.get('image')
		const updatedData = {
			name: data.get('name'),
			price: data.get('price'),
			description: data.get('description'),
		}

		if (!data.get('name')) {
			return NextResponse.json(
				{
					message: 'Name is Required',
				},
				{
					status: 400,
				}
			)
		}
		if (image) {
			//use generate image libs
			const filePath = await processImage(image)

			const res = await cloudinary.uploader.upload(filePath)
			updatedData.image = res.secure_url
			//console.log(res)

			//delete image fron public
			if (res) {
				await unlink(filePath)
			}
		}

		const result = await db.query('UPDATE product SET ? WHERE id = ?', [
			updatedData,

			params.id,
		])

		if (result.affectedRows === 0) {
			return NextResponse.json(
				{
					message: 'Producto no encontrado',
				},
				{
					status: 404,
				}
			)
		}

		const updatedProduct = await db.query(
			'SELECT * FROM product WHERE id = ?',
			[params.id]
		)
		//console.log(result)
		//return NextResponse.json({ ...data }) // solo para confirmar q se actualizo datos
		return NextResponse.json(updatedProduct[0]) //recuperar datos actualizados
	} catch (error) {
		return NextResponse.json(
			{
				message: error.message,
			},
			{
				status: 500,
			}
		)
	}
}
