import {Route, Routes} from "react-router-dom";
import Login from "../app/Login";
import SignIn from "../app/SignIn";
import MemberDetail from "../app/Member-detail";
import MemberUpdate from "../app/MemberUpdate";
import AdminSignIn from "../app/AdminSignIn";


function Router({setProfileChange}) {
    return (
        <Routes>
            <Route path={"/"} element={<Login/>} />
            <Route path={"/signIn"} element={<SignIn/>}/>
            <Route path={`/memberDetail/:memberId`} element={<MemberDetail/>}/>
            <Route path={"/update"} element={<MemberUpdate setProfileChange={setProfileChange} />}/>
            <Route path={"/signInAdmin"} element={<AdminSignIn/>}/>
        </Routes>
    );
}

export default Router;