import PropTypes from 'prop-types';

function GenderInput({ value, onChange }) {
    return (
        <select 
            value={value} 
            onChange={onChange} 
            className='w-full px-3 py-2 border border-gray-300 rounded-md'
        >
            <option value=''>Select Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
        </select>
    );
}

GenderInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default GenderInput;