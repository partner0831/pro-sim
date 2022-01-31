import React, { useState } from "react";
import { BtnInfo, BtnNormal } from "components/Button";
const ButtonGroup = ({ buttons }: any) => {
  const [clickedId, setClickedId] = useState(0);

  const handleClick = (id: any) => {
    setClickedId(id);
  };
  return (
    <div className="flex flex-row space-x-6 overflow-x-auto">
      {buttons.map((buttonLabel: any, i: any) => {
        if (i === clickedId) {
          return (
            <div key={i + 1}>
              <BtnInfo
                onClick={() => {
                  handleClick(i);
                }}
              >
                {buttonLabel}
              </BtnInfo>
            </div>
          );
        } else {
          return (
            <div key={i + 1}>
              <BtnNormal
                onClick={() => {
                  handleClick(i);
                }}
              >
                {buttonLabel}
              </BtnNormal>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ButtonGroup;
