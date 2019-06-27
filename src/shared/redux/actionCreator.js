export const buildActionCreator = (type, ...argsNames) => (...args) => {
  const action = { type };

  argsNames.forEach((argName, index) => {
    action[argsNames[index]] = args[index];
  });

  return action;
};
