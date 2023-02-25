import { Button, Container, Icon, Para, SubHeading } from "components";
import bg from 'assets/svg/login.svg';
import './login.css';
import { IoMdSwap } from 'react-icons/io';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginFn } from "redux/slice/loginSlice";


export default function Index() {
    const { colors } = useSelector(state => state.theme);
    const { isLoading } = useSelector(state => state.login)
    const dispatch = useDispatch();
    const initialState = {
        method: "login",
        username: "",
        password: ""
    }
    const [state, setState] = useState(initialState);

    const handleChangeMode = () => {
        setState({ ...state, method: state.method === 'login' ? 'register' : 'login' })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginFn({ method: state.method, data: { username: state.username, password: state.password } }))
    }
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    return (
        <Container style={{ flex: 1 }} >
            <img src={bg} style={{ flex: 1, height: "100vh", width: "100%", objectFit: "cover", position: "absolute", zIndex: -999 }} />
            <form onSubmit={handleSubmit} className="login-form">
                <div className="inside-login">
                    <div className="dajc login-header" style={{ borderColor: colors?.textSecondary }}>
                        <SubHeading className="f1">{state.method === 'login' ? 'Login' : 'Register'} </SubHeading>
                        <Icon src={IoMdSwap} onClick={handleChangeMode} />
                    </div>
                    <div className="mt-3">
                        <Para>User Name</Para>
                        <input className="form-control" name="username" onChange={e => handleChange(e)} />
                    </div>
                    <div className="mt-3">
                        <Para>Password</Para>
                        <input className="form-control" name="password" onChange={e => handleChange(e)} />
                    </div>
                    <div className="ac">
                        <Button type="submit" isLoading={isLoading} className="mt-3 " variant="success">{state.method === 'login' ? "Login" : "Register"}</Button>
                    </div>
                </div>

            </form>
        </Container>

    )
}