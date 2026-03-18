import localFont from 'next/font/local';

export const font = localFont({
  variable: '--custom-font',
  fallback: ['system-ui', 'sans-serif'],
  src: [
    {
      path: './montserrat/Montserrat-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: './montserrat/Montserrat-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
  ],
});
