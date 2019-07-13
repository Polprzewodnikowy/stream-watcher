export const buildActionReducers = ({
  start,
  success,
  error,
  clear,
}) => ([
  (state = false, { type }) => {
    switch (type) {
      case start:
        return true;
      case success:
      case error:
      case clear:
        return false;
      default:
        return state;
    }
  },
  (state = false, { type }) => {
    switch (type) {
      case success:
        return true;
      case start:
      case error:
      case clear:
        return false;
      default:
        return state;
    }
  },
]);
