import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { loginFn, update } from "redux/slice/loginSlice";
import { loginUserRoutes, unLoginRoutes } from 'utils/routes'

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.login)
  console.log('user: ', user);

  const handleLogin = () => {
    dispatch(loginFn({ method: 'login', data: { username: "jerald", password: "0000" } }))
  }

  return (
    <BrowserRouter>
      {
        user?.login ?
          <Routes>
            {
              loginUserRoutes?.map((res, i) => <Route key={i + 'login-routes'} {...res} />)
            }
          </Routes>
          :
          <Routes>
            {
              unLoginRoutes.map((res, i) => <Route key={i + 'un-login-routes'} {...res} />)
            }
          </Routes>
      }
    </BrowserRouter>
  )
}