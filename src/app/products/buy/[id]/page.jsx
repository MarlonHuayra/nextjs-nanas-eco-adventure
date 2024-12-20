
import ProductCard from '@components/ProductCard'
import axios from 'axios'
import BuyForm from '@components/BuyForm'

async function loadProduct(ProductId) {
	const { data } = await axios.get(
		`http://localhost:3000/api/products/${ProductId}`
	)
	//console.log(res)

	return data
}

async function BuyPage({ params }) {
	const Product = await loadProduct(params.id)
	console.log(Product)
	// Supongamos que tienes los datos del producto que deseas mostrar

  

	return (
		<section className=" w-full flex flex-col justify-center items-center ">
			<h1 className="text-4xl font-bold mb-4">Realizar Pedido</h1>
			<div className="  w-3/5 flex justify-center ">
				<div className="p-6 bg-white text-gray-700 w-2/3 rounded-lg">
					<h3 className="text-4xl after:font-bold mb-6 ">{Product.name}</h3>
					<h4 className="text-2xl font-bold">Precio: {Product.price} $</h4>

					<p className="text-slate-700 mb-6">{Product.description}</p>
					<h2 className="text-3xl text-yellow-400">✰✰✰✰✰</h2>
				</div>
				<img src={Product.image} className="w-1/3 rounded-lg ml-2" alt="" />
			</div>
      <BuyForm product={Product}/>

		</section>
	)
}
export default BuyPage
