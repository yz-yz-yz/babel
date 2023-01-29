"use strict";

require("core-js/modules/es.promise.js");
require("core-js/modules/es.promise.finally.js");
const arr = () => {
  console.log(222);
};
Promise.resolve().finally();