// const config = {
//   plugins: {
//     "@tailwindcss/postcss": {},
//   },
// };
// export default config;


const config ={
  plugins: {
    "@tailwindcss/postcss": {
      tailwindConfig: "./tailwind.config.js"
    },
    "autoprefixer": {}
  }
}
export default config;
