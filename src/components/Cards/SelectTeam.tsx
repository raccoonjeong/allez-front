import React from "react";

type SelectTeamProps = {
  value: string;
  onChange: (value: string) => void;
  label?: string;
};

const SelectTeam: React.FC<SelectTeamProps> = ({ value, onChange, label = "팀 선택" }) => {
  const teams = [
    { value: "", label: "선택" },
    { value: "team1", label: "팀1" },
    { value: "team2", label: "팀2" },
    { value: "team3", label: "팀3" },
  ];

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
      <div className="flex-auto p-4">
        <div className="flex flex-wrap">
          <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
            <h5 className="text-blueGray-400 uppercase font-bold text-xs mb-2">
              {label}
            </h5>
            <select
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
            >
              {teams.map((team) => (
                <option key={team.value} value={team.value}>
                  {team.label}
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