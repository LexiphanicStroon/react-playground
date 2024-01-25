function Button(props) {
const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + 'px'
};
return (
    <button style={buttonStyle}>{props.text}</button>
);
}

Button.defaultProps = {
    text: "Click Me!",
    color: "blue",
    fontSize: 12
  };

function SayHello() {     
    return (
        <div>
            <Button />
            <Button text="Button Two" color="blue" fontSize="14" />
            <Button text="Button Three" color="aqua" fontSize="30" />            
        </div>
    )
}

export {SayHello};