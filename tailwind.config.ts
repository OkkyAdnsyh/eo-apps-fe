import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'white-grad' : 'linear-gradient(0deg, rgba(0,0,0,1) 8%, rgba(0,0,0,0.6755077030812324) 35%, rgba(0,0,0,0) 100%)'
      },
    },
  },
  plugins: [],
}
export default config
