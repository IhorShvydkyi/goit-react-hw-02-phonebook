import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

function Filter({ onChange, value }) {
  const filterInputId = uuidv4();
  return (
    <div>
      <label htmlFor={filterInputId}>Find contact by the name</label>
      <input
        type="text"
        name="filter"
        value={value}
        id={filterInputId}
        onChange={onChange}
      />
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
