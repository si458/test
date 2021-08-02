const { resolve } = require('path');
const { compile } = require('nexe');
(async function () {
  await compile({
    input: resolve(__dirname, 'index.js'),
    targets: [`windows-x64`],
    build: true,
    loglevel: 'verbose'
  });
})().catch(console.error);
