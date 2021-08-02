const { resolve } = require('path');
const { compile } = require('nexe');
(async function () {
  await compile({
    input: resolve(__dirname, 'index.js'),
    output: resolve(__dirname, 'dist', 'windows-x64-14.17.4'),
    targets: ['windows-x64-14.17.4'],
    name: appName,
    build: true,
  });
})().catch(console.error);
