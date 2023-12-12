import AllTable from "../../components/AllTable/AllTable";
import Header from "../../components/Header/Header";

const Cheack = () => {
    const dataID_Parse = document.location.href.split("/")
    const dataID_Parse__method = dataID_Parse[dataID_Parse.length-1]

    const hashMap = {
        car: "сервисов для проверки автомобилей",
        people: "сервисов для проверки людей",
        company: "сервисов для проверки компаний"
    }
    return (
        <>
            <Header />
            <main>
                <AllTable status_Checking={hashMap[dataID_Parse__method]} />
            </main>
        </>
    )
}

export default Cheack