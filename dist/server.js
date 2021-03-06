"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.get('/', (request, response) => {
  return response.json({
    message: 'hello'
  });
});
const port = process.env.PORT || 8080;
app.listen(port);
console.log(`server app on port ${port}`);