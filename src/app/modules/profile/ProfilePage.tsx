import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
// import { Overview } from "./components/Overview";
import { Report1 } from "./components/Report1";
import { ProfileHeader } from "./ProfileHeader";
import { Overview } from "../accounts/components/Overview";
import {Report2} from "./components/Report2";
import {Report3} from "./components/Report3";
import { Report4 } from "./components/Report4";
import { Report5 } from "./components/Report5";
import { Report6 } from "./components/Report6";
import { Report7 } from "./components/Report7";


const profileBreadCrumbs: Array<PageLink> = [
  {
    title: "Profile",
    path: "/crafted/pages/profile/overview",
    isSeparator: false,
    isActive: false,
  },
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
            <PageTitle breadcrumbs={profileBreadCrumbs}>Rapor-1</PageTitle>
            <Report1 />
          </>
        }
      />
      <Route
        path="report2"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Rapor-2</PageTitle>
            <Report2 />
          </>
        }
      />
      <Route
        path="report3"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Rapor-3</PageTitle>
            <Report3 />
          </>
        }
      />
      <Route
        path="report4"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Rapor-4</PageTitle>
            <Report4 />
          </>
        }
      />

      <Route
        path="report5"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Rapor-5</PageTitle>
            <Report5 />
          </>
        }
      />
      <Route
        path="report6"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Rapor-6</PageTitle>
            <Report6 />
          </>
        }
      />
      <Route
        path="result"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Sonuç Raporu</PageTitle>
            <Report7 />
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
