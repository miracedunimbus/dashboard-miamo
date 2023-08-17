import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {I18nProvider} from '../_metronic/i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from '../TeacherLayout/layout/core'
import {MasterInit} from '../TeacherLayout/layout/MasterInit'
import {AuthInit} from './modules/auth'
import {ThemeModeProvider} from '../_metronic/partials'

const App = () => {
  const user = "teacher";
  const role = "manager"
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        {
          (user === role.toString())
          && 
          (
            <LayoutProvider>
              <ThemeModeProvider>
                <AuthInit>
                  <Outlet />
                  <MasterInit />
                </AuthInit>
              </ThemeModeProvider>
            </LayoutProvider>
          )
        }

        {
          !(user === role.toString())
          && 
          (
            <p className='w-75 mx-auto mt-5 bg-dark text-white p-5 text-center'> Kullanıcı rolleri eşit olmadığı için şu an bu alanı görüyorsun. App.tsx içinde static bir kontrol var onu eşitlerse bu hata düzelir.  </p>
          )
        }
      </I18nProvider>
    </Suspense>
  )
}

export {App}
