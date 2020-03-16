import PropTypes from "prop-types";

export const movieTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
});
