import Login from 'views/login';
import Dashboard from 'views/dashboard'

export const loginUserRoutes = [
    { name: "login", path: '/', element: <Dashboard /> }

]

export const unLoginRoutes = [
    { name: "login", path: '/', element: <Login /> }
]

