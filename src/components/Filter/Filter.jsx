import PropTypes from "prop-types";
import css from "./Filter.module.css";

const Filter = ({ value, onChange }) => (
  <label className={css.label}>
    Find contacts by name:
    <input type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
