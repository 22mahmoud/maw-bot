module.exports = {
  '*.{js,jsx,ts,tsx}': 'eslint --fix',
  '*.(md|json)': 'prettier --write',
  '**/*.(j|t)s?(x)': () => 'yarn build:types',
};
