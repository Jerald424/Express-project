import React, { useLayoutEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { isVerify } from "redux/slice/loginSlice"
import axiosInstance from "service/axiosnInstance"
import { loginUserRoutes, unLoginRoutes } from 'utils/routes'

export default function App() {
  const user = useSelector(state => state.login);
  const dispatch = useDispatch();

  const getInitialData = async () => {
    const token = await localStorage.getItem('token');
    if (token !== null) dispatch(isVerify(token))
  }
  useLayoutEffect(() => {
    getInitialData()
  }, [])

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