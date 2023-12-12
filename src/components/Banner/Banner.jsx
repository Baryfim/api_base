import React, { useEffect, useState } from "react";
import classes from "./Banner.module.css";
import Container from "../UI/container/container";
import Financial_analysis from "../../images/Financial analysis.svg";
import Button2 from "../UI/button_t2/button_t2";

const Banner = () => {
  const [fontSize, setFontSize] = useState(window.innerWidth >= 870 ? "16px" : "12px");
  const [buttonStyles, setButtonStyles] = useState({
    fontSize,
    width: window.innerWidth >= 870 ? "160px" : "120px",
    height: window.innerWidth >= 870 ? "50px" : "45px",
  });

  useEffect(() => {
    const handleResize = () => {
      const newFontSize = window.innerWidth >= 870 ? "16px" : "12px";
      setFontSize(newFontSize);

      const newButtonStyles = {
        fontSize: newFontSize,
        width: window.innerWidth >= 870 ? "160px" : "120px",
        height: window.innerWidth >= 870 ? "50px" : "45px",
      };

      setButtonStyles(newButtonStyles);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={classes.BannerBlock}>
      <Container>
        <div className={classes.innerBanner}>
          <div className={classes.TextContentInfo}>
            <h1 className={classes.TextContentInfo__Title}>
              Данные из 50+ баз - гос, коммерческих и открытых.<br />
              С нами - легко и надежно.
            </h1>
            <p className={classes.TextContentInfo__Body}>
              На основании потребностей и масштаба бизнеса вы можете выбрать готовый тарифный план или заказать индивидуальное решение.
            </p>
            <Button2 style={buttonStyles}>
              Регистрация
            </Button2>
          </div>
          <div className={classes.ImageInfo}>
            <img src={Financial_analysis} alt="Financial_analysis" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
