import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Home from "../Component/Home";

const HomePage=()=>{
    const login_status = useSelector(state=>state.login.login_Status);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!login_status){
            navigate('/login')
        }
    },[])

    return (
        <Home />
    )
}

export default HomePage;
