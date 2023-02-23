import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { update } from "redux/slice/loginSlice";

export default function App() {
  const { arr } = useSelector(state => state.login);
  const dispatch = useDispatch();

  const arrUpdate = () => {
    dispatch(update('2'))
  }

  console.log('value: ', arr);
  return (
    <div>
      <button onClick={arrUpdate}>Update</button>
    </div>
  )
}