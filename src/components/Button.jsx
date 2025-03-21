const Button = ({ btnText, click, className }) => {
    // const handleClick = (e) => {
    //     console.log("Button clicked"); // remove later
    //     e.preventDefault();
    // }
    
    return (
        <button onClick={click} className={`geologica bg-[#40C146] text-white py-2 rounded-md ${className}`}>{btnText}</button>
    )
}

export default Button;
