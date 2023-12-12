import classes from "./button.module.css"


const Button = (props) => {
    return (
        <button className={classes.BtnBlock}>
            {props.children}
        </button>
    )
}

export default Button