import classes from "./button_t2.module.css"


const Button2 = (props) => {
    return (
        <button className={classes.BtnBlock} style={props.style}>
            {props.children}
        </button>
    )
}

export default Button2