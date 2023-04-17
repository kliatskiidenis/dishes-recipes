import { Inter, Poppins } from 'next/font/google'
import Link from 'next/link'
import Image from "next/image";


const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

export default function Home() {
	return (
		<div className='h-[80vh] w-full flex flex-col items-center justify-center'>
			<div className='text-center relative'>
				<p className='text-accent font-medium text-lg mb-5 relative z-30'>
					Explore popular delishes recipes from around the world!
				</p>

				<Link 
					href="/countries"
					className='inline-block py-3 px-4 border-2 rounded-xl border-solid border-accent text-accent bg-white hover:text-white hover:bg-accent transition-all duration-300 z-30 relative'
				>
					See the world cuisines
				</Link>

				<Image src='/plate1.png' alt='Plate Image' width={200} height={200} className='absolute top-0 -right-[60px] -z-10 opacity-20'/>
				<Image src='/plate2.png' alt='Plate Image' width={200} height={200} className='absolute -left-3 -bottom-3 -z-10 opacity-20'/>
			</div>
		</div>
	)
}