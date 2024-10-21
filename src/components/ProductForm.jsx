'use client' //solo del lado del cliente
import { useRef, useState, useEffect } from 'react'
import axios from 'axios' //para enviar los datos a db engloba flecht
import { useRouter, useParams } from 'next/navigation'

function productForm() {
	const [product, setproduct] = useState({
		name: '',
		price: 0,
		description: '',
	})

	const [file, setfile] = useState(null)
	const form = useRef(null) // var para resetear ulario
	const router = useRouter()
	const params = useParams() //console.log(params)

	const handleChance = (e) => {
		//console.log(e.target.value, e.target.name)
		setproduct({
			...product,
			[e.target.name]: e.target.value,
		})
	}

	useEffect(() => {
		if (params.id !== undefined) {
			axios.get(`/api/products/${params.id}`).then((res) => {
				//console.log(res.data)
				setproduct({
					name: res.data.name,
					price: res.data.price,
					description: res.data.description,
				})
			})
		}
	}, [params.id]) // Agrega params.id como dependencia para que el efecto se ejecute solo cuando cambia

	const handleSubmit = async (e) => {
		e.preventDefault() //para q no reinicia la pagina
		//console.log(product)
		const formData = new FormData()
			formData.append('name', product.name)
			formData.append('price', product.price)
			formData.append('description', product.description)
			//formData.append('image', file)
			if(file){
				formData.append('image', file)
			}

		//if doesnt exist a params.id
		if (!params.id) {
			//create Product
			//enviando a db usando axios
			const res = await axios.post('/api/products', formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
			})
			console.log(res)
		} else {

			//edith product		
			const res = await axios.put(`/api/products/${params.id}`, formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
			})
			console.log(res)
			//console.log('actualizando')
		}

		form.current.reset() //reiniciar form
		router.refresh()
		router.push('/products') //auto navigation
	}

	return (
		
			<form
				action=""
				className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
				onSubmit={handleSubmit}
				ref={form}
			>
				<h1 className="text-gray-700 text-lg font-bold m-4 text-center">
					{params.id ? 'Actualizar Producto' : 'Crear Producto'}
				</h1>
				<label
					htmlFor="name"
					className="block text-gray-700 text-sm font-bold mb-2"
				>
					{' '}
					Nombre:
				</label>
				<input
					name="name"
					type="text"
					placeholder="name"
					onChange={handleChance}
					value={product.name}
					autoFocus
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
				/>

				<label
					htmlFor="price"
					className="block text-gray-700 text-sm font-bold mb-2"
				>
					{' '}
					Precio:
				</label>
				<input
					name="price"
					type="text"
					placeholder="00.00"
					onChange={handleChance}
					value={product.price}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
				/>

				<label
					htmlFor="name"
					className="block text-gray-700 text-sm font-bold mb-2"
				>
					Descripcion:
				</label>

				<textarea
					name="description"
					rows={3}
					placeholder="description"
					onChange={handleChance}
					value={product.description}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
				/>

				<label
					htmlFor="name"
					className="block text-gray-700 text-sm font-bold mb-2"
				>
					Cargar Imagen:
				</label>
				<input
					type="file"
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2"
					onChange={(e) => {
						setfile(e.target.files[0])
						//console.log(e.target.files[0])
					}}
				/>

				{file && (
					<img
						className="w-80 object-contain mx-auto my-4 mb-4"
						src={URL.createObjectURL(file)}
						alt=""
					/>
				)}

				<button className="hidden lg:flex justify-end text-xl font-semibold py-4 px-6 lg:px-12 navbutton text-white">
					{params.id ? 'Actualizar Producto' : 'Crear Producto'}
					{/* if prams.id exists =update:c */}
				</button>
			</form>
		
	)
}

export default productForm
