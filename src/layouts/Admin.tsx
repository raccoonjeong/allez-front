import React from "react";
import { Outlet } from "react-router-dom";

// components
import AdminNavbar from "@/components/Navbars/AdminNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import HeaderStats from "@/components/Headers/HeaderStats";
import FooterAdmin from "@/components/Footers/FooterAdmin";

// views
import Dashboard from "@/views/admin/Dashboard";
import Maps from "@/views/admin/Maps";
import Settings from "@/views/admin/Settings";
import Tables from "@/views/admin/Tables";


// 컴포넌트에 명시적으로 타입 선언 (필수는 아님, 하지만 권장)
const Admin: React.FC = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Outlet /> {/* 여기서 중첩된 페이지가 렌더링됩니다 */}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
};

export default Admin;
