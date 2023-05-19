import { useSelector, useDispatch } from "react-redux";

import { loginAction } from "../redux/LoginReducer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Component/UI/Button";
import classes from "./Login.module.css";

const Login=()=>{
    const loginState = useSelector(state=> state.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ nameShowError, setNameShowError ] = useState(false);
    const [ passwordShowError, setPasswordShowError ] = useState(false);

    let nameIsTouched = false;
    let passwordIsTouched = false;

    const enabled = loginState.name.trim().length > 5 && loginState.password.trim().length > 6;

    const nameHandler = (e)=>{
        dispatch(loginAction.nameChanger(e.target.value));
        if(e.target.value.trim().length > 5 ){
            setNameShowError(false)
        }
    }

    const passwordHandler = (e)=>{
        dispatch(loginAction.passwordChanger(e.target.value));
        if(e.target.value.trim().length > 6){
            setPasswordShowError(false)
        }
    }

    const nameBlurHandler=()=>{
        nameIsTouched = true;
        if(loginState.name.trim().length < 5 && nameIsTouched){
            setNameShowError(true)
        }
    }

    const passwordBlurHandler=()=>{
        passwordIsTouched = true;
        if(loginState.password.trim().length < 6 && passwordIsTouched){
            setPasswordShowError(true)
        }
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        localStorage.setItem("loggedIN", true);
        dispatch(loginAction.status_changer())
        navigate('/', {replace: true})
    }

    return (
        <div className={classes.majorContainer}>
            <form onSubmit={submitHandler} className={classes.form}>
                <p className={classes.title}>LogIn Form</p>
                <div className={classes.username}>
                    <label htmlFor="userName">Username</label>
                    <input onBlur={nameBlurHandler} onChange={nameHandler} name="userName" type="text"/>
                    {nameShowError && <p className={classes.error}>Name must be &gt; 5</p>}
                </div>
                <div className={classes.password}>
                    <label htmlFor="password">Password</label>
                    <input onBlur={passwordBlurHandler} onChange={passwordHandler} name="password" type="password" />
                    {passwordShowError && <p className={classes.error}>Password must be &gt; 6 </p>}
                </div>
                <Button disabled={!enabled} className={classes.button}>Submit</Button>
            </form>
        </div>
    )
}

export default Login;