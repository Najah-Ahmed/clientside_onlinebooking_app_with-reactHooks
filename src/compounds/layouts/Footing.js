import React from 'react';

const Footing = () => {
  return (
    <footer className='text-gray-500 bg-gray-900 body-font '>
      <div className='bg-gray-800'>
        <div className='container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col'>
          <a
            href='#!'
            className='flex title-font font-medium items-center md:justify-start justify-center text-white'>
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
          </a>
          <p className='text-sm text-gray-600 sm:ml-6 sm:mt-0 mt-4'>
            © 2020 Najah Said Ahmed —
            <a
              href='https://twitter.com/knyttneve'
              className='text-gray-500 ml-1'
              target='_blank'
              rel='noopener noreferrer'>
              @Najaah-Ahmed
            </a>
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
            <a href='#!' className='text-gray-600'>
              <svg
                fill='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'>
                <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
              </svg>
            </a>
            <a href='#!' className='ml-3 text-gray-600'>
              <svg
                fill='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'>
                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
              </svg>
            </a>
            <a href='#!' className='ml-3 text-gray-600'>
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'>
                <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
              </svg>
            </a>
            <a href='#!' className='ml-3 text-gray-600'>
              <svg
                fill='currentColor'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='0'
                className='w-5 h-5'
                viewBox='0 0 24 24'>
                <path
                  stroke='none'
                  d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'></path>
                <circle cx='4' cy='4' r='2' stroke='none'></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footing;
