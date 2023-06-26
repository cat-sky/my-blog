import { Routes,Route } from "react-router-dom";
import LoginPage from "./login";
function IndexRouter(){
    return <Routes>
        <Route path="/login" element={<LoginPage/>}/>
    </Routes>
}

export default IndexRouter