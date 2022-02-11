module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html','./node_modules/flowbite/**/*.js'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    fontFamily: {
      montserrat: ['montserrat', 'sans-serif'],
    },
    extend: {
      margin: {
        30: '7.5rem',
      },
      fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.4rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
    },
      screens: {
        xxxs: { min: '272px' },
        xxs: { min: '340px' },
        xs: { min: '438px' },
        sm: { min: '663px' },
        md: { min: '768px' },
        lg: { min: '1092px' },
        xl: { min: '1280px' },
      },
      backgroundImage: {
        gradient:
          'linear-gradient(to left, rgb(251, 113, 133), rgb(217, 70, 239), rgb(99, 102, 241))',
        texture: 'url(/src/assets/texturebg2.png)',
      },
      colors: {
        gradient: {
          DEFAULT:
            'linear-gradient(to left, rgb(251, 113, 133), rgb(217, 70, 239), rgb(99, 102, 241))',
        },

        about: {
          DEFAULT: '#FF715B',
          50: '#FFFFFF',
          100: '#FFFEFE',
          200: '#FFDBD5',
          300: '#FFB8AD',
          400: '#FF9484',
          500: '#FF715B',
          600: '#FF4023',
          700: '#EA1F00',
          800: '#B21800',
          900: '#7A1000',
        },

        bittersweet: {
          DEFAULT: '#FF715B',
          50: '#FFFFFF',
          100: '#FFFEFE',
          200: '#FFDBD5',
          300: '#FFB8AD',
          400: '#FF9484',
          500: '#FF715B',
          600: '#FF4023',
          700: '#EA1F00',
          800: '#B21800',
          900: '#7A1000',
        },

        magenta: {
          DEFAULT: '#CB6497',
          50: '#F9EDF3',
          100: '#F4DEE9',
          200: '#EAC0D4',
          300: '#DFA1C0',
          400: '#D583AB',
          500: '#CB6497',
          600: '#B93E7B',
          700: '#8F305F',
          800: '#652243',
          900: '#3B1427',
        },

        violet: {
          DEFAULT: '#9130EA',
          50: '#EAD7FB',
          100: '#E0C4F9',
          200: '#CC9FF5',
          300: '#B87AF2',
          400: '#A555EE',
          500: '#9130EA',
          600: '#7515CD',
          700: '#58109A',
          800: '#3B0A67',
          900: '#1E0534',
        },

        light: {
          0: '#FFFFFF',
          100: '#EBE6F0',
          200: '#D7CCE2',
          300: '#C3B3D3',
          400: '#AF99C5',
          500: '#9B80B6',
          600: '#8766A7',
          700: '#734D99',
          800: '#5F338A',
          900: '#4B1A7C',
          1000: '#37006D',
        },

        dark: {
          0: '#37006D',
          100: '#320062',
          200: '#2C0057',
          300: '#27004C',
          400: '#210041',
          500: '#1C0037',
          600: '#16002C',
          700: '#100021',
          800: '#0B0016',
          900: '#05000B',
          1000: '#000000',
        },
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
