const config = {
  content: [
    "*"
  ],
  theme: {
    
    extend: {
      colors: {
        'primary': '#050505',
        'border-2': '#004FFF',
        'card-2': '#31AFD4',
        'card-1': '#902D41',
        'border-1': '#FF007F',
        'secondary': '#35605A',
        'notify': '#6B818C',
        'BG': '#D8E4FF',
      }
    },
  },
  plugins: ["@tailwindcss/postcss"],

};

export default config;
