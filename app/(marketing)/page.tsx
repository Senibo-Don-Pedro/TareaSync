import { Button } from '@/components/ui/button'

import { Nunito, Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'

import Link from 'next/link'

const headerFont = Nunito({
  subsets: ['latin'],
  weight: ['1000', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const textFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function MarketingPage() {
  return (
    <div className='text-center px-5 mx-auto'>
      <h1
        className={cn(
          'text-4xl font-bold tracking-tight text-red-600 sm:text-6xl',
          headerFont.className
        )}
      >
        TareaSync
      </h1>
      <p
        className={cn(
          'mt-6 text-lg leading-8 text-gray-600 px-12 md:px-48',
          textFont.className
        )}
      >
        Simplify your workflow, amplify your productivity. TareaSync is your
        all-in-one solution for seamless task management. Stay organized,
        collaborate effortlessly, and watch your projects flourish. Sign up
        today and transform the way you work!
      </p>
      <div className='mt-10 flex items-center justify-center gap-x-6'>
        <Button
          className='px-5 py-6 shadow-2xl shadow-red-400'
          variant={'destructive'}
          asChild
          size={'default'}
        >
          <Link href='/sign-up'>Get TareaSync</Link>
        </Button>
      </div>
    </div>
  )
}
