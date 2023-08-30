import {FC} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {PrivateRoutes} from './PrivateRoutes'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {Logout, AuthPage, useAuth, StaticAuthController, CheckUserLoggedIn} from '../modules/auth'
import {App} from '../App'

const {PUBLIC_URL} = process.env

const AppRoutes: FC = () => {
  // const {currentUser} = useAuth()
  const user: string = "teacher";
  const currentUser = CheckUserLoggedIn()
  console.log(currentUser)

  return (
    <>
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} />
          {currentUser ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              {
                currentUser.role === "student" && (
                  <Route index element={<Navigate to='/crafted/pages/profile/projects' />} />
                )
              }
              {
                currentUser.role === "teacher" && (
                  <Route index element={<Navigate to='/dashboard' />} />
                )
              }
              
            </>
          ) : (
            <>
              <Route path='auth/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='/auth' />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export {AppRoutes}
