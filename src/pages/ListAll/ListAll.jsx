import AllTable from "../../components/AllTable/AllTable";
import Header from "../../components/Header/Header";

const ListAll = () => {
    return (
        <>
            <Header />
            <main>   
                <AllTable status_Checking="доступных проверок" />
            </main>
        </>
    )
}

export default ListAll;