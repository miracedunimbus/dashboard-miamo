/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, { FC, useEffect, useState } from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {PrivateRoutes} from './PrivateRoutes'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {Logout, AuthPage, useAuth, getUserId, getUser, UserRole} from '../modules/auth'
import {App} from '../App'


const {PUBLIC_URL} = process.env

const AppRoutes: FC = () => {
  return (
    <>
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} />
          {getUserId() ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              {
                UserRole() === "student" && (
                  <Route index element={<Navigate to='/metronic8/react/demo8/crafted/account/overview' />} />
                )
              }
              {
                UserRole() === "teacher" &&  (
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
