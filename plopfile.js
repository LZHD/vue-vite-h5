// eslint-disable-next-line @typescript-eslint/no-var-requires
const componentGenerator = require('./templates/component/prompt');

module.exports = function (plop) {
  plop.setGenerator('component', componentGenerator);
};
