'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function Buttons({ productId }) {

	const router = useRouter()

	return (
		<div className="flex gap-x-2 justify-start mt-4">
			<button
				className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6"
				onClick={async () => {
					if (confirm('Esta seguro de borrar este producto?')) {
						const res = await axios.delete(`/api/products/${productId}`)
						//console.log(res)
						if (res.status === 204) {
							router.push('/products')
							router.refresh()
						}
					}
				}}
			>
				Borrar
			</button>
			<button className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6" 

			onClick={() => {
          router.push(`/products/edit/${productId}`);
        }} >
				Editar
			</button>
		</div>
	)
}

export default Buttons
