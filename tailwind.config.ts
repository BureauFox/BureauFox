import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary-rgb) / <alpha-value>)',
        darkmode: 'rgb(var(--color-darkmode-rgb) / <alpha-value>)',
        midnight_text: 'rgb(var(--color-midnight-text-rgb) / <alpha-value>)',
        'midnight-text': 'rgb(var(--color-midnight-text-rgb) / <alpha-value>)',
        purple: 'rgb(var(--color-purple-rgb) / <alpha-value>)',
        grey: 'rgb(var(--color-grey-rgb) / <alpha-value>)',
        border: 'rgb(var(--color-border-rgb) / <alpha-value>)',
        'deep-slate': 'rgb(var(--color-deep-slate-rgb) / <alpha-value>)',
        'deep_slate': 'rgb(var(--color-deep-slate-rgb) / <alpha-value>)',
        error: 'rgb(var(--color-error-rgb) / <alpha-value>)',
        warning: 'rgb(var(--color-warning-rgb) / <alpha-value>)',
      },
    },
  },
};

export default config;
