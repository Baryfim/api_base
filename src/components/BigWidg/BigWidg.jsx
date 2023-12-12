import classes from "./BigWidg.module.css"
import Container from "../UI/container/container"
import Button2 from "../UI/button_t2/button_t2"
// Images
import Hand from "../../images/Saved Security Password.svg"


const BigWidg = () => {
    return (
        <div className={classes.BigWidg}>
            <Container>
                <div className={classes.BigWidg__inner}>
                    <div className={classes.BigWidg_inner__block}>
                        <h2>Начните использовать наш сервис для получения данных через API!</h2>
                        <p>
                            Наш API отличается невероятной удобностью и скоростью. Мы постоянно обновляем базу данных, добавляя новые данные для вашего удобства. Это позволяет вам получать самую актуальную информацию в режиме реального времени.
                        </p>
                        <Button2 style={{marginLeft: "35px"}}>
                            Регистрация
                        </Button2>
                    </div>
                    <img src={Hand} alt="Hand" className={classes.Hand} />
                </div>
            </Container>
        </div>
    )
}

export default BigWidg