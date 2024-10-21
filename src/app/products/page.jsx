//import { db } from "@/libs/mysql"
//import { NextResponse } from "next/server"
import ProductCard from '@/components/ProductCard'
import axios from 'axios'

async function loadProducts() {
	// pidiendo desde la db
	/* const result = await db.query('SELECT * FROM product')
  console.log(result) */

	//usando la api con axios
	const { data } = await axios.get('http://localhost:3000/api/products')
	return data
}
export const dynamic = 'force-dynamic'

async function ProductsPage() {
	const products = await loadProducts()
	//console.log(products)

	return (
		
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{products.map((product) => (
				<ProductCard product={product} key={product.id} />
			))}{' '}
		</div>
	)
}

export default ProductsPage
