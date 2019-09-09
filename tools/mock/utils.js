const processArrayParameter = (param, defaultValue) => {
  if (param) {
    return Array.isArray(param) ? param : [param];
  }
  return [defaultValue];
};

module.exports = {
  processArrayParameter,
};
