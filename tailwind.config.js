module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('flowbite/plugin')],
};
