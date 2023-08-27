import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
// import { Overview } from "./components/Overview";
import { Report1 } from "./components/Report1";
import { ProfileHeader } from "./ProfileHeader";
import { Overview } from "../accounts/components/Overview";
// import {Report8} from "./components/Report8";
import {Report2} from "./components/Report2";
import { Report3 } from "./components/Report3";
import { Report4 } from "./components/Report4";
import { Report5 } from "./components/Report5";
import { Report6 } from "./components/Report6";


const profileBreadCrumbs: Array<PageLink> = [
  // {
  //   title: "Profile",
  //   path: "/crafted/pages/profile/overview",
  //   isSeparator: false,
  //   isActive: false,
  // },
  {
    title: "",
    path: "",
    isSeparator: true,
    isActive: false,
  },
];

const ProfilePage = () => (
  <Routes>
    <Route
      element={
        <>
          <ProfileHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path="overview"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Overview</PageTitle>
            <Overview />
          </>
        }
      />
      <Route
        path="report1"
        element={
          <>
            <PageTitle>Çalışma Raporu</PageTitle>
            <Report1 />
          </>
        }
      />
      <Route
        path="report3"
        element={
          <>
            <PageTitle>Bilişsel Analiz Raporu</PageTitle>
            <Report2 />
          </>
        }
      />
      <Route
        path="report4"
        element={
          <>
            <PageTitle>Zaman Süreci Raporu / Aylık</PageTitle>
            <Report3 />
          </>
        }
      />

      <Route
        path="report5"
        element={
          <>
            <PageTitle>Zaman Süreci Raporu / Yıllık</PageTitle>
            <Report4 />
          </>
        }
      />
      <Route
        path="report6"
        element={
          <>
            <PageTitle>Bilişsel Analiz Raporu</PageTitle>
            <Report5 />
          </>
        }
      />
      <Route
        path="result"
        element={
          <>
            <PageTitle>Sonuç</PageTitle>
            <Report6 />
          </>
        }
      />

      <Route
        index
        element={<Navigate to="/crafted/pages/profile/overview" />}
      />
    </Route>
  </Routes>
);

export default ProfilePage;
