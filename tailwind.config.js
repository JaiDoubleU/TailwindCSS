const themeSwapper = require('tailwindcss-theme-swapper')

module.exports = {
  purge: [],
  theme: {
    screens: {
      sm: '640px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      borderRadius: {
          'sm': '3px',
      },
      boxShadow: {
        'xs': '0 1px 1px 0px #00000080',
        'sm': '0 1px 2px 0px #00000080',
        'md': '0 1px 6px 0px #00000080'
      },
      leading: {

      },
      fontSize: {
        'xs': '10px',
        'sm': '12px',
        'base': '14px',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl':'1.875rem'
      },
      fontFamily: {
        sans: ['Roboto Flex', 'sans-serif'],
        heading: ['Roboto Flex', 'sans-serif'],
      },
      colors: {
        primary: {
            light: '#A0EF6E',
            DEFAULT: '#56BC2F',
            dark: '#3C8321'
        },
        neutrals: {
            black: '#000000',
            gray1: '#1c1b1d',
            gray2: '#29272b',
            gray3: '#323035',
            gray4: '#3c3a3f',
            gray5: '#48454b',
            gray6: '#56535b',
            gray7: '#625f66',
            gray8: '#78757b',
            gray9: '#9a989c',
            gray10: '#b2b1b3',
            gray11: '#cccbce',
            gray12: '#ddddde',
            gray13: '#e7e7e7',
            gray14: '#f0f0f0',
            gray15: '#fafafa',
            white: '#ffffff'
        }, 
        info: {
            light: '#D9EDFF',
            DEFAULT: '#3272D9',
            dark: '#006CFF'
        },
        success:{
          light: '#DFF1D8',
          DEFAULT: '#56BC2F',
          dark: '#3C8321'
        },
        warning:{
          light: '#FFEEC2',
          DEFAULT: '#FFBA00',
          dark: '#986F00'
        },
        danger:{
          light: '#FFD4D1',
          DEFAULT: '#FF5444',
          dark: '#DD301D'
        },
        blue: {
            light: '#5ABBD7',
            DEFAULT: '#247C96',
            dark: '#1A5A6D'
        }, 
        orange: {
            light: '#FABC8A',
            DEFAULT: '#b26200',
            dark: '#D64000'
        },        
        purple: {
            light: '#EAD9FA',
            DEFAULT: '#9c55d3',
            dark: '#7D3CBD'
        }    
      }
    },
  },
  variants: {},
  plugins: [],
}
