import PropTypes from 'prop-types';

const FormInput = ({ type, placeholder, className, defaultValue }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={className}
            defaultValue={defaultValue}
        />
    );
};

FormInput.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    defaultValue: PropTypes.string,
};

export default FormInput;