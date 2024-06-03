import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import { UserContextProvider } from "./UserContext"
import ProfilePage from "./pages/ProfilePage"
import AlertPage from "./pages/AlertPage"
import EditAlert from "./pages/EditAlert"
import CreateNews from "./pages/CreateNews"

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/alert/:id' element={<AlertPage />} />
          <Route path='/edit/:id' element={<EditAlert />} />
          <Route path='/create' element={<CreateNews />} />
        </Route>
      </Routes>
    </UserContextProvider>

  )
}

export default App
