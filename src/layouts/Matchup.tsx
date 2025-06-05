import React, { useState } from "react";

// components
import AdminNavbar from "@/components/Navbars/AdminNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import FooterAdmin from "@/components/Footers/FooterAdmin";
import Tables from "@/views/admin/Tables";
import SelectTeam from "@/components/Cards/SelectTeam";

// 컴포넌트에 명시적으로 타입 선언 (필수는 아님, 하지만 권장)
const Matchup: React.FC = () => {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 min-h-screen">
        <AdminNavbar />
        {/* Header */}
        <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
                <SelectTeam
                  value={team1}
                  onChange={setTeam1}
                  label="홈팀 선택"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
                <SelectTeam
                  value={team2}
                  onChange={setTeam2}
                  label="원정팀 선택"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Tables />
          <FooterAdmin />
        </div>
      </div>
    </>
  );
};

export default Matchup; 