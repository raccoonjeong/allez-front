import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

// components

import Navbar from "@/components/Navbars/AuthNavbar.jsx";
import FooterSmall from "@/components/Footers/FooterSmall.jsx";

// views

import Login from "../views/auth/Login.jsx";
import Register from "../views/auth/Register.jsx";

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "/img/register_bg_2.png",
            }}
          ></div>
          {/* <Routes> */}
            <Outlet /> {/* 여기서 중첩된 페이지가 렌더링됩니다 */}
            {/* <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Redirect from="/auth" to="/auth/login" /> */}
          {/* </Routes> */}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
