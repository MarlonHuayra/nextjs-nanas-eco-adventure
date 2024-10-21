import Link from 'next/link';

function ProductCard({ product }) {
    return (
        <div className="bg-blue p-6 rounded-lg m-1.5 m-a text-gray-800 transition-transform duration-200 transform hover:scale-105 hover:shadow-md hover:bg-navyblue hover:border-purple-800 hover:border-2 border-transparent">
            <Link href={`/products/${product.id}`}>
                <div className="flex flex-col">
                    <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                        {product.image && (
                            <img src={product.image} className="object-cover w-full h-full" alt={product.name} />
                        )}
                    </div>
                    <div className="pb-4 flex-grow flex flex-col">
                        <h1 className="text-offwhite text-xl font-semibold leading-snug mb-2 text-center md:text-start">{product.name}</h1>
                        <h2 className="feature-font text-2xl font-semibold mb-4 text-center md:text-start">{product.price} Bs</h2>
                        <h2 className="text-3xl text-yellow-400">✰✰✰✰✰</h2>
                        <p className="text-lightblue text-sm font-normal overflow-hidden h-16">{product.description}</p>
                    </div>
                </div>
            </Link>

            <Link href={`/products/buy/${product.id}`}>
                <div className="flex justify-center mt-4"> {/* Centrado del botón */}
                    <button className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton">
                        Get Asset
                    </button>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;
