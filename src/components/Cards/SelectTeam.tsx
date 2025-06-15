import React, { useEffect, useState } from "react";
import type { Team } from "@/types/Team";
//type Team = { value: string; label: string };

type SelectTeamProps = {
  value: Team | undefined;
  onChange: (value: Team) => void;
  label?: string;
  color?: "light" | "dark";
};

const SelectTeam: React.FC<SelectTeamProps> = ({ 
  value, 
  onChange, 
  label = "팀 선택",
  color = "light"
}) => {
  const [teams, setTeams] = useState<Team[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // 실제 API 엔드포인트로 변경하세요
    fetch("http://localhost:8080/teams")
      .then((res) => res.json())
      .then((data) => {
        // data가 [{id, name}] 형태라고 가정
        // console.log("팀 데이터:", data);
        if (!Array.isArray(data?.content) || !data.content.every((team: any) => team.teamId && team.teamName)) {
          throw new Error("팀 데이터 형식이 올바르지 않습니다.");
        }
        const teamOptions = data.content;
        setTeams([{ teamId: 0, teamName: "선택" }, ...teamOptions]);
      })
      .catch(() => {
        // 에러 처리 필요시 추가
      })
      .finally(() => setLoading(false));
  }, []);

  const darkArrow = `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`;
  const lightArrow = `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%232563eb' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`;

  return (
    <div
      className={
        "relative flex flex-col min-w-0 break-words rounded mb-6 xl:mb-0 shadow-lg " +
        (color === "light" ? "bg-white" : "bg-stone-700 text-white")
      }
    >
      <div className="flex-auto p-4">
        <div className="flex flex-wrap">
          <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
            <h5
              className={
                "uppercase font-bold text-xs mb-2 " +
                (color === "light" ? "text-amber-700" : "text-white")
              }
            >
              {label}
            </h5>
            <select
              value={value?.teamId ?? 0}
              onChange={(e) => {
                const selected = teams.find((team) => String(team.teamId) === e.target.value);
                if (selected) onChange(selected);
              }}
              style={{
                appearance: "none",
                backgroundImage: color === "light" ? lightArrow : darkArrow,
                backgroundPosition: "right 0.5rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
                paddingRight: "2.5rem"
              }}
              className={
                "border-0 px-3 py-3 text-sm shadow focus:outline-none focus:ring w-full rounded " +
                (color === "light"
                  ? "placeholder-amber-300 text-amber-600 bg-white"
                  : "placeholder-stone-300 text-white bg-stone-600")
              }
              disabled={loading}
            >
              {teams.map((team, idx) => (
                <option
                  key={idx}
                  value={team.teamId}
                  className={
                    color === "light" ? "text-amber-600" : "text-white bg-stone-600"
                  }
                >
                  {team.teamName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTeam;