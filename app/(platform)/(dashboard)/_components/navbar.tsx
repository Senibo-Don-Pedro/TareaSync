import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import { MobileSidebar } from './mobile-sidebar'

export function Navbar() {
  return (
    <nav className='fixed z-50 px-4 top-0 w-full h-14 border-b shadow-md flex bg-red-50 items-center'>
      <MobileSidebar />
      <div className='flex items-center gap-x-4'>
        <div className=''>
          <Logo />
        </div>
        <Button
          size='sm'
          variant='destructive'
          className='rounded-md hidden md:block h-auto py-1.5 px-2'
        >
          Create
        </Button>
        <Button
          size='sm'
          variant='destructive'
          className='rounded-sm block md:hidden'
        >
          <Plus className='h-4 w-4 ' />
        </Button>
      </div>

      <div className='ml-auto flex items-center gap-x-2'>
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl='/organization/:id'
          afterSelectOrganizationUrl='/organization/:id'
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl='/'
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  )
}
