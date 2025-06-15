import type { Match } from "@/types/Match";
import type { Team } from "@/types/Team";
import React from "react";

interface Props {
  color?: "light" | "dark";
  team1?: Team;
  team2?: Team;
  matchups?: Match[];
}

const HeadToHeadSummary: React.FC<Props> = ({ color = "light", team1 = undefined, team2 = undefined, matchups=[] }) => {
  return (
    <div
      className={
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
        (color === "light" ? "bg-white" : "bg-stone-700 text-white")
      }
    >
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              className={
                "font-semibold text-lg " +
                (color === "light" ? "text-amber-700" : "text-white")
              }
            >
              상대 전적 {team1?.teamName && team2?.teamName ? `(${team1.teamName} vs ${team2.teamName})` : ""}
            </h3>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        {/* Projects table */}
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              {["날짜", "홈/원정", "결과", "득", "실"].map((header) => (
                <th
                  key={header}
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-amber-50 text-amber-500 border-amber-100"
                      : "bg-stone-600 text-stone-200 border-stone-500")
                  }
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matchups.map((match, rowIdx) => { 
              // const rowClass =
              //   rowIdx % 2 === 1
              //     ? "bg-amber-50 text-amber-500"
              //     : ""; // 홀수 행에만 체크무늬 스타일
              return(
                <tr key={match.matchId ?? rowIdx}>
                {[
                  match.matchDate,
                  match.homeAway === "H" ? "홈" : match.homeAway === "A" ? "원정" : 
                  "중립",
                  match.winDrawLoss === "W" ? "승" : match.winDrawLoss === "D" ? "무" : "패",
                  match.gain,
                  match.loss,
                ].map((cell, colIdx) => (
        <td
            key={colIdx}
            className={
              "border-t-0 px-6 align-middle border-l-0 border-r-0 text-s text-border whitespace-nowrap p-4" +
              ((rowIdx % 2 === 1) !== (colIdx % 2 === 1) ? " bg-stone-600 text-stone-200 border-stone-500" : "")
            }
          >
              {cell}
            </td>
          ))}
        </tr>
              
            )}
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HeadToHeadSummary;