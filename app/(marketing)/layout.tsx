import { Footer } from './_components/footer'
import { Navbar } from './_components/navbar'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='min-h-screen bg-gray-300'>
      <Navbar />
      <main className=' pt-40 pb-20 bg-gray-300'>{children}</main>
      <Footer />
    </div>
  )
}
