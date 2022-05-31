module.exports = {
    mode: 'jit',
    plugins: [
      require('tailwindcss')('./tailwind.config.js'),
      require('autoprefixer')
    ],
}