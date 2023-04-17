/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',	
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.themealdb.com',
				port: '',
				pathname: '/images/media/meals/**',
			},
		],
	},
}

module.exports = nextConfig