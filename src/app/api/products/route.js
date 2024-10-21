import { NextResponse } from 'next/server'
import { db } from '@/libs/mysql'
import { unlink } from 'fs/promises'
import cloudinary from '@/libs/cloudinary'
import { processImage } from '@/libs/processImage'


//obtener lista de productos
export async function GET() {
	try {
		//consultar por la columna product d db
		const results = await db.query('SELECT * FROM product')

		// obtener la respuesta en formato
		return NextResponse.json(results)
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

//enviar un producto a db
export async function POST(request) {
	try {
		//recibe product del front
		const data = await request.formData()
		const image = data.get('image')

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

		if (!image) {
			return NextResponse.json(
				{
					message: 'Image is Required',
				},
				{
					status: 400,
				}
			)
		}

		//use generate image libs
		const filePath = await processImage(image)

		//use cloudinary
		const res = await cloudinary.uploader.upload(filePath)
		console.log(res)
		//delete image fron public
		if(res){
			await unlink(filePath)

		}

		//agregando los valores a la columna de product db
		const result = await db.query('INSERT INTO product SET?', {
			name: data.get('name'),
			description: data.get('description'),
			price: data.get('price'),
			image: res.secure_url,
		})

		//console.log(result)
		//para vizualizar en la consola de nextjs
		//obtenemos los valores agregados de db
		return NextResponse.json({
			id: result.insertId,
			name: data.get('name'),
			description: data.get('description'),
			price: data.get('price'),

		})

	} catch (error) {
		console.log(error)
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
