const { resolve } = require('path');
const { compile } = require('nexe');
const version = "14.17.4";
(async function () {
  await compile({
    input: resolve(__dirname, 'index.js'),
    targets: [`windows-x64${version}`,`mac-x64${version}`,`linux-x64${version}`],
    build: true,
  });
})().catch(console.error);
