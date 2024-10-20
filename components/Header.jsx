import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/icon.png';
import { FaUser, FaSignInAlt, FaSignOutAlt, FaBuilding } from 'react-icons/fa';

const Header = () => {
    return (
        <header className='bg-purple-400'>
          <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center justify-between'>
              <div className='flex items-center'>
                <Link href='/'>
                  <Image
                    className='h-12 w-12'
                    src={logo}
                    alt='Smart Space'
                    priority={true}
                  />
                </Link>
                <div className='hidden md:block'>
                  <div className='ml-10 flex items-baseline space-x-4'>
                    <Link
                      href='/'
                      className='rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-black hover:text-purple-600'
                    >
                      Rooms
                    </Link>
                    {/* <!-- Logged In Only --> */}
                    
                        <Link
                          href='/bookings'
                          className='rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-black hover:text-purple-600'
                        >
                          Bookings
                        </Link>
                        <Link
                          href='/rooms/add'
                          className='rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-black hover:text-purple-600'
                        >
                          Add Room
                        </Link>
                      
                  </div>
                </div>
              </div>
              {/* <!-- Right Side Menu --> */}
              <div className='ml-auto'>
                <div className='ml-4 flex items-center md:ml-6'>
                  {/* <!-- Logged Out Only --> */}
                  
                      <Link
                        href='/login'
                        className='mr-3 text-black hover:text-white'
                      >
                        <FaSignInAlt className='inline mr-1' /> Login
                      </Link>
                      <Link
                        href='/register'
                        className='mr-3 text-black hover:text-white'
                      >
                        <FaUser className='inline mr-1' /> Register
                      </Link>
                    
    
                  
                      <Link href='/rooms/my'
                       className='mr-3 text-black hover:text-white'>
                        <FaBuilding className='inline mr-1' /> My Rooms
                      </Link>
                      <button
                        
                        className='mx-3 text-black hover:text-white'
                      >
                        <FaSignOutAlt className='inline mr-1' /> Sign Out
                      </button>
                    
                </div>
              </div>
            </div>
          </nav>
    
          {/* <!-- Mobile menu --> */}
          <div className='md:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
              <Link
                href='/'
                className='block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-black'
              >
                Rooms
              </Link>
              {/* <!-- Logged In Only --> */}
              
                  <Link
                    href='/bookings'
                    className='block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-black'
                  >
                    Bookings
                  </Link>
                  <Link
                    href='/rooms/add'
                    className='block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-black'
                  >
                    Add Room
                  </Link>
            </div>
          </div>
        </header>
      );
    };
    
    export default Header;
    