const preprocess = require('svelte-preprocess');

module.exports = {
  extensions: ['.svelte'],
  preprocess: preprocess({
    typescript: true,
  }),
};
