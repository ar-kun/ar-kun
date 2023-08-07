/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./*.html'],
 theme: {
  container: {
   center: true,
   padding: '7rem',
  },
  extend: {
   colors: {
    primary: '#253452',
    secondary: '#1F2C45',
    tertiary: '#05B1DD',
   },
   fontFamily: {
    second: ['Lobster Two', 'cursive'],
    primary: ['Merriweather', 'serif'],
   },
  },
 },
 plugins: [],
};
