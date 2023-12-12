import Cheack from "./pages/Cheack/Cheack";
import Doc from "./pages/Doc/Doc";
import Home from "./pages/Home/Home";
import ListAll from "./pages/ListAll/ListAll";
import { CAR_CHEACK, COMPANY_CHEACK, DOC_ITEM, HOME_ROUTE, LIST_ALL_ROUTE, PEOPLE_CHEACK } from "./utils/consts";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        component: Home
    },
    {
        path: LIST_ALL_ROUTE,
        component: ListAll
    },
    {
        path: DOC_ITEM,
        component: Doc
    },
    {
        path: CAR_CHEACK,
        component: Cheack
    },
    {
        path: PEOPLE_CHEACK,
        component: Cheack
    },
    {
        path: COMPANY_CHEACK,
        component: Cheack
    }
]