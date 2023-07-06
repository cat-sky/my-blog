import { Routes,Route,Navigate } from "react-router-dom";


import LoginPage from "./login";
import HomePage from "./home/index";

function IndexRouter(){
    return <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/" element={
            localStorage.getItem('user')==null?
            <Navigate to={'login'}/>:
            <Navigate to={'/home'}/>
            }/>
    </Routes>
}

export default IndexRouter;