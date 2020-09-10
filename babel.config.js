module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}

// module.exports = {
//   presets: [
//     '@vue/cli-plugin-babel/preset'
//   ],
//   module: {
//     rules: [
//       // ... other rules omitted
//
//       // this will apply to both plain `.scss` files
//       // AND `<style lang="scss">` blocks in `.vue` files
//       // allow debugger during development
//
//       {
//         test: /\.scss$/,
//         use: [
//           'vue-style-loader',
//           'css-loader',
//           'sass-loader',
//         ]
//       }
//     ]
//   }
// }
