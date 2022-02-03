import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ReactComponent as Logo } from '../../assets/logo.svg'

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Speakers', href: '#' },
  { name: 'Agenda', href: '#' },
  { name: 'Sponsors', href: '#' },
  { name: `What's Inside`, href: '#' },
  { name: `DDD'21`, href: '#' },
  { name: `FAQ's`, href: '#' },
]

const Navbar = () => {
  return (
    <Popover>
      <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
        <nav
          className='relative flex items-center justify-between '
          aria-label='Global'
        >
          <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
            <div className='flex items-center justify-between w-full '>
              <div className=''>
                <Logo />
              </div>
              <div className='-mr-2 flex items-center lg:hidden'>
                <Popover.Button className='bg-none rounded-md p-2 inline-flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Open main menu</span>
                  <MenuIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className='font-montserrat hidden lg:block lg:ml-10 lg:pr-4 lg:space-x-8'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-md text-white'
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right l:hidden'
        >
          <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
            <div className='px-5 pt-4 flex items-center justify-between'>
              <div>
                <Logo />
              </div>
              <div className='-mr-2'>
                <Popover.Button className='bg-none rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Close main menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navbar
