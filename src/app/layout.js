import Header from '@/components/Header'
import './globals.css'
import Image from "next/image";
import BackNav from '@/components/BackNav';

export const metadata = {
  title: 'Dishes Recipes DB',
  description: 'Dishes Recipes DB - Test application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='container mx-auto px-4'>
            <Header/>

            <BackNav />
            
            {children}
        </div>
      </body>
    </html>
  )
}