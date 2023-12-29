import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'

export const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full p-4 '>
      <div className='md: max-w-screen-xl mx-auto flex items-center w-full justify-between'>
        <Logo />
        <div className=' space-x-4 flex items-center justify-between w-full md:w-auto md:block'>
          <Button size='sm' variant='ghost'>
            Privacy Policy
          </Button>
          <Button size='sm' variant='ghost'>
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  )
}
