const Button = ({ btnText, click}) => {
    // const handleClick = (e) => {
    //     console.log("Button clicked"); // remove later
    //     e.preventDefault();
    // }
    
    return (
        <button onClick={click} className="geologica bg-[#40C146] text-white w-full py-2 my-2 rounded-md">{btnText}</button>
    )
}

export default Button;
