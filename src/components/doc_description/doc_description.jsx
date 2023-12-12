import classes from "./doc_description.module.css"
import Container from "../UI/container/container"

const doc_description = (props) => {
    return (
        <div className={classes.infoDescription}>
            <Container>
                <div className={classes.infoDescription__inner}>
                    <h2 className={classes.infoDescription__inner_title}>
                        Документация по работе с {props.title}
                    </h2>
                    <p className={classes.description} style={{color: "#021f36"}}>
                        {props.description}
                    </p>
                    <div className={classes.infoDescription__inner_list}>
                        <p><span className={classes.label}>Цена за запрос: </span> {props.price}</p>
                        <p><span className={classes.label}>Статус работы: </span> {props.status}</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default doc_description