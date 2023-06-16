const copyStaticFiles = require('esbuild-copy-static-files');

module.exports = [
  copyStaticFiles({
    src: './prisma/schema.prisma',
    dest: './.build/prisma/schema.prisma',
    recursive: false,
  }),
];
