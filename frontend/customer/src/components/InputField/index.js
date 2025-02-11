import './index.css'
function InputField({ type, value, classes }) {
    return ( <input type={type} value={value} className={classes}/> );
}

export default InputField;