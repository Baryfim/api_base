
import classes from './Marquee.module.css';
import Marquee from "react-fast-marquee";
import gbdd from "../../images/1.png";
import rsa from "../../images/2.svg";
import fssp from "../../images/3.svg";
import rss_zalogov from "../../images/4.svg";
import rosreestr from "../../images/5.svg"
import mvd from "../../images/6.svg"
import rosfinomonitoring from "../../images/7.svg"


const Marquee_func = () => {
  return (
    <div className={classes.marquee}>
      <Marquee speed={100} autoFill={true} gradient={false} loop={0} className={classes.Marquee__block}>
        <div className={classes.marquee_item} style={{ width: "110px", height: "90px", margin: '0 20px' }}>
            <img src={gbdd} alt={"gbdd"} />
            <p>ГИБДД</p>
        </div>
        <div className={classes.marquee_item} style={{ width: "100px", height: "90px", margin: '0 20px' }}>
            <img src={rsa} alt={"rsa"} />
            <p>РСА</p>
        </div>
        <div className={classes.marquee_item} style={{ width: "110px", height: "90px", margin: '0 20px' }}>
            <img src={fssp} alt={"fssp"} />
            <p>ФССП</p>
        </div>
        <div className={classes.marquee_item} style={{ width: "240px", height: "90px", margin: '0 20px' }}>
            <img src={rss_zalogov} alt={"rss_zalogov"} />
            <p>Реестр-Залогов</p>
        </div>
        <div className={classes.marquee_item} style={{ width: "170px", height: "90px", margin: '0 20px' }}>
            <img src={rosreestr} alt={"rosreestr"} />
            <p>Росреестр</p>
        </div>
        <div className={classes.marquee_item} style={{ width: "100px", height: "90px", margin: '0 20px' }}>
            <img src={mvd} alt={"mvd"} />
            <p>МВД</p>
        </div>
        <div className={classes.marquee_item} style={{ width: "250px", height: "90px", margin: '0 20px' }}>
            <img src={rosfinomonitoring} alt={"rosfinomonitoring"} />
            <p>Росфинмониторинг</p>
        </div>
      </Marquee>
    </div>
  );
};

export default Marquee_func;
