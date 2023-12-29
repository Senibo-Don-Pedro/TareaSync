import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className='fixed top-0 w-full bg-red-50 h-14 px-4 border-b shadow-md flex items-center'>
      <div className='md: max-w-screen-xl mx-auto flex items-center w-full justify-between'>
        <Logo />
        <div className=' space-x-4 flex items-center justify-between w-full md:w-auto md:block'>
          <Button size='sm' variant='outline' asChild>
            <Link href='/sign-in'>Login</Link>
          </Button>
          <Button size='sm' variant='destructive' asChild>
            <Link href='/sign-up'>Get TareaSync</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
