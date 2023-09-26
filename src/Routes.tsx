import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/Home";
import { CompleteOrderPage } from './Pages/CompleteOrder/index';
import { DefaultLayout } from "./layout/DefaultLayout";


export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/completeOrder" element={<CompleteOrderPage/>}/>
            </Route>
        </Routes>
    )
}
