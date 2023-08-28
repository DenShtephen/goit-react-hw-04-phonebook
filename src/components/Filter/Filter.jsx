import '../../index.css';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => (
  <input
    type="text"
    value={filter}
    onChange={onChange}
    className="filter-input"
    placeholder="Search contacts by name"
  />
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
