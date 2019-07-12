import PropTypes from 'prop-types';

export const channel = {
  avatarUrl: PropTypes.string.isRequired,
  gameTitle: PropTypes.string,
  login: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.string,
  userId: PropTypes.number.isRequired,
  viewers: PropTypes.number,
};
