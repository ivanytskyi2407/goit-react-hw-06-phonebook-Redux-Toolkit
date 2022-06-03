import { connect } from 'react-redux';
import s from './Filter.module.css';
import { filterContacts } from '../../redux/Phonebook/phoonebook-actions';

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.label} htmlFor="">
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

const mapStateToProps = state => ({
  value: state.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
