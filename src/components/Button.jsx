const Button = ({ btnText, click, className }) => {
    return (
        <button onClick={click} className={`geologica bg-[#40C146] text-white py-2 rounded-md ${className}`}>{btnText}</button>
    )
}

export default Button;
