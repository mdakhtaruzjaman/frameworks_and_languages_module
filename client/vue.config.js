const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8001,
    server: {
      type: 'https',
    },
    // ... any other dev server options you need
  },
});