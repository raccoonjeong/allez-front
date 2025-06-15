import React, { useState, useEffect } from "react";
import type { Match } from "@/types/Match";
import type { Team } from "@/types/Team";

// components
import AdminNavbar from "@/components/Navbars/AdminNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import FooterAdmin from "@/components/Footers/FooterAdmin";
import SelectTeam from "@/components/Cards/SelectTeam";
import HeadToHeadSummary from "@/components/Cards/HeadToHeadSummary";

// 컴포넌트에 명시적으로 타입 선언 (필수는 아님, 하지만 권장)
const Matchup: React.FC = () => {
  const [team1, setTeam1] = useState<Team>();
  const [team2, setTeam2] = useState<Team>();
  const [matchups, setMatchups] = useState<Match[]>([]);
  
  useEffect(() => {
    if (team1 && team2) {
      searchMatchup();
    }
  }, [team1, team2]);

    // 값이 변경될 때 실행되는 함수
  const handleTeam1Change = (value: Team) => {
    console.log("팀1 선택됨:", value);
    setTeam2(undefined); // 홈팀이 선택되면 원정팀 초기화
    setMatchups([]); // 매치업 초기화
    setTeam1(value);
  };

  const handleTeam2Change = (value: Team) => {
    console.log("팀2 선택됨:", value);
    if (!team1) return;
    setTeam2(value); // ✅ 상태만 변경
  };

  const searchMatchup = () => {
    console.log(team1, team2);
    if (!team1 || !team2) {
      console.error("팀1과 팀2를 모두 선택해야 합니다.");
      return;
    }

    // 여기에 팀 간의 매치업을 검색하는 로직을 추가합니다.
    console.log(`매치업 검색: ${team1} vs ${team2}`);


    fetch(`http://localhost:8080/matches/matchup?teamId1=${team1.teamId}&teamId2=${team2.teamId}`)
      .then((res) => res.json())
      .then((data) => {
        
        console.log("매치업",data)
        if (!Array.isArray(data?.content)) {
          throw new Error("매치업 데이터 형식이 올바르지 않습니다.");
        }
        setMatchups(data.content);

      })
      .catch(() => {
        // 에러 처리 필요시 추가
        throw new Error("매치업 데이터 오류 발생");
      })
      .finally(() => {});

  }


  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-lime-500 min-h-screen">
        <AdminNavbar />
        {/* Header */}
        <div className="relative bg-amber-100 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
                <SelectTeam
                  value={team1}
                  onChange={handleTeam1Change}
                  label="팀1 선택"
                  color="light"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
                <SelectTeam
                  value={team2}
                  onChange={handleTeam2Change}
                  label="팀2 선택"
                  color="dark"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap mt-4">
            <div className="w-full mb-12 xl:mb-0 px-4">
              <HeadToHeadSummary color="dark" team1={team1} team2={team2} matchups={matchups}/>
            </div>
          </div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
};

export default Matchup; 