import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/im.svg';
import authContext from '../../context/auth/authContext';
const Navbar = () => {
  const Auth = useContext(authContext);
  const { isAuthenticated, logout, user } = Auth;
  const onLogout = () => {
    logout();
  };
  const authLink = (
    <Fragment>
      <Link to='/about' className='mr-5 hover:text-white'>
        About
      </Link>
      <Link to='/contact' className='mr-5 hover:text-white'>
        Contact
      </Link>{' '}
      <Link to='/user' className='list-none mr-5 hover:text-white'>
        Hello {user && user.userName}
      </Link>
      <Link to='/admin' className='list-none mr-5 hover:text-white'></Link>
      <li className='list-none mr-5 hover:text-white'>
        <a
          onClick={onLogout}
          href='#!'
          className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
          Logout
        </a>
      </li>
    </Fragment>
  );

  const guessLink = (
    <Fragment>
      <Link to='/about' className='mr-5 hover:text-white'>
        About
      </Link>
      <Link to='/contact' className='mr-5 hover:text-white'>
        Contact
      </Link>
      <Link to='/login' className='mr-5 hover:text-white'>
        Login
      </Link>
      <Link to='/register' className='mr-5 hover:text-white'>
        Register
      </Link>
    </Fragment>
  );

  return (
    <header className='text-gray-500 bg-gray-900 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link
          to='/'
          className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
          {/* Hello world */}
          <svg width='20pt' height='20pt' viewBox='0 0 20 20' version='1.1'>
            <defs>
              <linearGradient
                id='linear0'
                gradientUnits='userSpaceOnUse'
                x1={0}
                y1={256}
                x2={512}
                y2={256}
                gradientTransform='matrix(0.0390625,0,0,0.0390625,0,0)'>
                <stop
                  offset={0}
                  style={{
                    stopColor: 'rgb(0%,95.294118%,55.294118%)',
                    stopOpacity: 1,
                  }}
                />
                <stop
                  offset={1}
                  style={{
                    stopColor: 'rgb(0%,61.960784%,100%)',
                    stopOpacity: 1,
                  }}
                />
              </linearGradient>
            </defs>
            <g id='surface1'>
              <path
                style={{
                  stroke: 'none',
                  fillRule: 'nonzero',
                  fill: 'url(#linear0)',
                }}
                d='M 20 10 C 20 15.523438 15.523438 20 10 20 C 4.476562 20 0 15.523438 0 10 C 0 4.476562 4.476562 0 10 0 C 15.523438 0 20 4.476562 20 10 Z M 20 10 '
              />
              <path
                style={{
                  stroke: 'none',
                  fillRule: 'nonzero',
                  fill: 'rgb(100%,100%,100%)',
                  fillOpacity: 1,
                }}
                d='M 15.421875 5.5 L 14.75 5.5 C 14.707031 4.382812 13.785156 3.492188 12.660156 3.492188 L 7.339844 3.492188 C 6.214844 3.492188 5.292969 4.382812 5.25 5.5 L 4.578125 5.5 C 3.980469 5.5 3.492188 5.988281 3.492188 6.585938 L 3.492188 8.269531 L 4.664062 8.269531 L 4.664062 6.671875 L 5.246094 6.671875 L 5.246094 13.867188 C 5.246094 14.433594 5.550781 14.933594 6 15.214844 L 6 15.421875 C 6 16.019531 6.488281 16.507812 7.089844 16.507812 C 7.675781 16.507812 8.15625 16.039062 8.175781 15.457031 L 11.773438 15.457031 C 11.792969 16.039062 12.273438 16.507812 12.859375 16.507812 C 13.460938 16.507812 13.949219 16.019531 13.949219 15.421875 L 13.949219 15.246094 C 14.429688 14.972656 14.753906 14.457031 14.753906 13.867188 L 14.753906 6.671875 L 15.335938 6.671875 L 15.335938 8.269531 L 16.507812 8.269531 L 16.507812 6.585938 C 16.507812 5.988281 16.019531 5.5 15.421875 5.5 Z M 13.164062 14.285156 L 6.835938 14.285156 C 6.605469 14.285156 6.417969 14.097656 6.417969 13.867188 L 6.417969 11.117188 L 6.953125 11.507812 C 7.226562 11.710938 7.554688 11.816406 7.894531 11.816406 L 12.292969 11.816406 C 12.667969 11.816406 13.03125 11.683594 13.320312 11.441406 L 13.582031 11.222656 L 13.582031 13.867188 C 13.582031 14.097656 13.394531 14.285156 13.164062 14.285156 Z M 9.414062 6.671875 L 9.414062 10.644531 L 7.894531 10.644531 C 7.804688 10.644531 7.71875 10.617188 7.648438 10.5625 L 6.417969 9.664062 L 6.417969 6.671875 Z M 13.582031 6.671875 L 13.582031 9.6875 L 12.5625 10.546875 C 12.488281 10.609375 12.390625 10.644531 12.292969 10.644531 L 10.585938 10.644531 L 10.585938 6.671875 Z M 7.339844 4.664062 L 12.660156 4.664062 C 13.140625 4.664062 13.535156 5.03125 13.578125 5.5 L 6.421875 5.5 C 6.464844 5.03125 6.859375 4.664062 7.339844 4.664062 Z M 7.339844 4.664062 '
              />
              <path
                style={{
                  stroke: 'none',
                  fillRule: 'nonzero',
                  fill: 'rgb(100%,100%,100%)',
                  fillOpacity: 1,
                }}
                d='M 8.09375 13.113281 C 8.09375 13.390625 7.867188 13.613281 7.589844 13.613281 C 7.3125 13.613281 7.089844 13.390625 7.089844 13.113281 C 7.089844 12.835938 7.3125 12.609375 7.589844 12.609375 C 7.867188 12.609375 8.09375 12.835938 8.09375 13.113281 Z M 8.09375 13.113281 '
              />
              <path
                style={{
                  stroke: 'none',
                  fillRule: 'nonzero',
                  fill: 'rgb(100%,100%,100%)',
                  fillOpacity: 1,
                }}
                d='M 12.886719 13.113281 C 12.886719 13.390625 12.660156 13.613281 12.382812 13.613281 C 12.105469 13.613281 11.882812 13.390625 11.882812 13.113281 C 11.882812 12.835938 12.105469 12.609375 12.382812 12.609375 C 12.660156 12.609375 12.886719 12.835938 12.886719 13.113281 Z M 12.886719 13.113281 '
              />
            </g>
          </svg>
          <span className='ml-3 text-xl'>Bari&&Galbeed</span>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          {isAuthenticated ? authLink : guessLink}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
