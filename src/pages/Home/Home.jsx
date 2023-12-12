import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Marquee from "../../components/Marquee/Marquee";
import Services from "../../components/Services/services";
import BigWidg from "../../components/BigWidg/BigWidg";
import FAQ from "../../components/FAQ/FAQ";


const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Marquee />
                <Services />
                <BigWidg />
                <FAQ />
            </main>
        </>
    )
}

export default Home;