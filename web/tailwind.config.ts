import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sansRegular: 'var(--font-roboto-400)',
        sansBold: 'var(--font-roboto-700)',
      },
      colors: {
        blue: {
          500: '#8fedc2',
          700: '#24b4a5',
          600: '#1E6F9F',
          900: '#166d8a'
        },
        gray: {
          100: '#f4f3ed'
        },
        yellow: {
          500: '#fdd741'
        }
      },
      gridTemplateColumns: {
        '2': '256px 1fr' 
      }
    },
  },
  plugins: [],
}
export default config
