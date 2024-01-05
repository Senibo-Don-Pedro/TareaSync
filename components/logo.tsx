import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Nunito } from 'next/font/google'

const headerFont = Nunito({
  subsets: ['latin'],
  weight: ['1000', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const Logo = () => {
  return (
    <Link href='/'>
      <div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
        <Image src='/logo.svg' alt='logo' height={30} width={30} />
        <p className={cn('text-lg text-red-600 pb-0', headerFont.className)}>
          TareaSync
        </p>
      </div>
    </Link>
  )
}
