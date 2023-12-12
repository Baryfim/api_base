import classes from "./container.module.css"


const container = (props) => {
    return (
        <div className={classes.container__block}>
            {props.children}
        </div>
    )
}

export default container