import classes from "./Header.module.css";
import Container from "../UI/container/container";
import { Link } from "react-router-dom";
import { HOME_ROUTE, LIST_ALL_ROUTE } from "../../utils/consts";
import Button from "../UI/button/button";
import { useState } from "react";

const Header = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    return (
        <header className={classes.Header}>
            <Container>
                <div className={classes.Header__Inner}>
                    <Link to={HOME_ROUTE} className={classes.Logotype__link}>
                        <h2 className={classes.Logotype__content}>ApiBase</h2>
                    </Link>
                    <div className={classes.NavList} style={{right: isBurgerOpen ? "0" : "-300px"}}>
                        <button className={classes.CloseBlock} onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
                            <span id={classes.m2} style={{transform: "rotate(-45deg)", top: "50%"}}></span>
                            <span id={classes.m3} style={{transform: "rotate(45deg)", top: "50%" }}></span>
                        </button>
                        <Link to="/people" className={classes.ItemList}>
                            <span>Проверка людей</span>
                        </Link>
                        <Link to="/company" className={classes.ItemList}>
                            <span>Проверка компаний</span>
                        </Link>
                        <Link to="/car" className={classes.ItemList}>
                            <span>Проверка автомобилей</span>
                        </Link>
                        <Link to={LIST_ALL_ROUTE} className={classes.ItemList}>
                            <span>Список</span>
                        </Link>
                    </div>
                    <div className={classes.NavigationsBtns}>
                        <Button>Вход</Button>
                        <button
                        className={classes.BugerMenu}
                        id="bugerMenu"
                        onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                        >
                            <span id={classes.m1} style={{display: isBurgerOpen ? "none": "block"}}></span>
                            <span id={classes.m2} style={{transform: isBurgerOpen ? "rotate(-45deg)": "rotate(0)", top: isBurgerOpen ? "50%" : "calc(50% + 6px)"}}></span>
                            <span id={classes.m3} style={{transform: isBurgerOpen ? "rotate(45deg)": "rotate(0)", top: isBurgerOpen ? "50%" : "calc(50% - 8px)"}}></span>
                        </button>
                </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;