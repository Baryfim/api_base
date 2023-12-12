import classes from "./services.module.css"
import Container from "../UI/container/container"
import { Link } from "react-router-dom"
// Images
import car from "../../images/passenger car front view.png"
import office from "../../images/Office meeting.png"
import business from "../../images/Business is growing.png"
// Icons
import arrow_light from "../../images/arrow_light.svg"
import arrow_dark from "../../images/arrow_dark.svg"



const Services = () => {
    return (
        <div className={classes.ServicesBlock}>
            <Container>
                <h1 className={classes.labelTitle}>Сервисы</h1>
                <div className={classes.ServicesBlock__list}>
                    <div className={classes.ServicesBlock__item_light}>
                        <div className={classes.ServicesBlock__item_text__content}>
                            <p>
                                <span attr={"1_1"} mode={"light"}>Проверка</span>
                                <span attr={"2"} mode={"light"}>людей</span>
                            </p>
                            <Link to={"/"} className={classes.BtnLink}>
                                <img src={arrow_light} alt="arrow_light" />
                                <span>Подробнее</span>
                            </Link>
                        </div>
                        <div className={classes.IconBlock}>
                            <img src={office} alt="office" />
                        </div>
                    </div>
                    <div className={classes.ServicesBlock__item_dark}>
                        <div className={classes.ServicesBlock__item_text__content}>
                            <p>
                                <span attr={"1"} mode={"dark"}>Проверка</span>
                                <span attr={"2_2"} mode={"dark"}>автомобилей</span>
                            </p>
                            <Link to={"/"} className={classes.BtnLink}>
                                <img src={arrow_dark} alt="arrow_light" />
                                <span>Подробнее</span>
                            </Link>
                        </div>
                        <div className={classes.IconBlock}>
                            <img src={car} alt="car" />
                        </div>
                    </div>
                    <div className={classes.ServicesBlock__item_light}>
                        <div className={classes.ServicesBlock__item_text__content}>
                            <p>
                                <span attr={"1"} mode={"light"}>Проверка</span>
                                <span attr={"2"} mode={"light"}>компаний</span>
                            </p>
                            <Link to={"/"} className={classes.BtnLink}>
                                <img src={arrow_light} alt="arrow_light" />
                                <span>Подробнее</span>
                            </Link>
                        </div>
                        <div className={classes.IconBlock}>
                            <img src={business} alt="business" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Services