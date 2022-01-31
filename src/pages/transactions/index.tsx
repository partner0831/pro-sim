import React from "react";
// @import component
import Table from "components/Table";
import { dashcol, dashdata } from "constant/tbldata";
// @import style
import styled from "styled-components";
// @import assets
import { HiPlus } from "react-icons/hi";
import { BtnInfo, BtnNormal } from "components/Button";
export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 16rem);

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
function Transactions() {
  return (
    <StyledContent>
      <div className="flex flex-row justify-between items-center p-7 border border-bordercolor">
        <span className="text-av font-semibold xs:text-mv break-all">
          Transactions
        </span>
        <div className="flex flex-row space-x-6">
          <BtnNormal onClick={() => {}}>Statement Opstions</BtnNormal>
          <BtnInfo onClick={() => {}}>Search</BtnInfo>
        </div>
      </div>
      <div className="flex flex-col px-7 mb-5">
        <div className="mt-av overflow-x-scroll">
          <Table columns={dashcol} data={dashdata} />
        </div>
      </div>
    </StyledContent>
  );
}
export default Transactions;
