/** @type {import('next').NextConfig} */
const nextConfig = {
	// para redireccionar paginas en next
	async redirects() {
		return [
			{
				source: '/',
				destination: '/products',
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
