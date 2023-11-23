
import './globals.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export const metadata = {
  title: 'Boots & Crampons',
  description: 'Take a journey to the top of the world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
