import React, { useState, useEffect } from "react";
import {
  StyledContent,
  AvatarContainer,
  AvatarContent,
  AvatarImg,
  AvatarInfo,
  AvatarName,
  AvatarSet,
  AvatarPro,
  TxtProfile,
  TxtBadge,
  DashContent,
  ButtonBar,
  SliderContet,
  CardContet,
  TableContet,
  CardDiv,
  BalanceBar,
  LoaderSVG,
  Balance,
  BalanceTxt,
  RealBal,
  IncBar,
  SubDesrip,
} from "./style";
import Slider from "./slider";
import NumberFormat from "react-number-format";
// @import component
import { IconCircle } from "components/IconCircle";
import ButtonGroup from "components/ButtonGroup";
import { BtnAlam } from "components/Button";
import { SuccessBadge } from "components/Bagde";
import Table from "components/Table";
import { dashcol, dashdata } from "constant/tbldata";
// @import language
import { t } from "businessobjects/Language";
// @import asset
import emptyAvatar from "assets/image/avatar/avatar-blank.png";
import edit from "assets/image/dashboard/edit.svg";
import verify from "assets/image/dashboard/verify.svg";
import bell from "assets/image/dashboard/bell.svg";
import month from "assets/image/dashboard/month.svg";
import Vector from "assets/image/dashboard/Vector.svg";
import calendarMonth from "assets/image/dashboard/calendar-month.svg";
// @import util
import { getProfile } from "businessobjects/User";

function Dashboard() {
  const [profile, setProfile] = useState<any>([]);
  // const [userdata, setUserdata] = useState<any>([]);

  useEffect(() => {
    async function init() {
      const response = await getProfile();
      setProfile(response.result);
    }
    init();
  }, []);

  return (
    <StyledContent>
      <AvatarContainer>
        <AvatarContent>
          <AvatarImg src={profile.imageURL ? profile.imageURL : emptyAvatar} />
          <AvatarInfo>
            <AvatarName>{profile.nickName}</AvatarName>
            <AvatarSet>
              <AvatarPro>
                <LoaderSVG src={edit} />
                <TxtProfile>Edit Profile</TxtProfile>
              </AvatarPro>
              <AvatarPro>
                <LoaderSVG src={verify} />
                <TxtBadge>Verifed</TxtBadge>
              </AvatarPro>
            </AvatarSet>
          </AvatarInfo>
        </AvatarContent>
        <BtnAlam>
          <LoaderSVG src={bell} />
          <span>{t("Notification")}</span>
        </BtnAlam>
      </AvatarContainer>

      <DashContent>
        <ButtonBar>
          <ButtonGroup buttons={[t("dashboard"), t("cards"), t("something")]} />
        </ButtonBar>
        <SliderContet>
          <Slider />
        </SliderContet>
        <CardContet>
          <CardDiv>
            <BalanceBar>
              <Balance>
                <BalanceTxt>Current Balance</BalanceTxt>
                <RealBal>
                  <NumberFormat
                    value={2456981}
                    thousandSeparator={true}
                    prefix={"$"}
                    displayType={"text"}
                  />
                </RealBal>
              </Balance>
              <IconCircle color="#FF92AE">
                <LoaderSVG src={month} />
              </IconCircle>
            </BalanceBar>
            <IncBar>
              <SuccessBadge>+13%</SuccessBadge>
              <SubDesrip>since last month</SubDesrip>
            </IncBar>
          </CardDiv>
          <CardDiv>
            <BalanceBar>
              <Balance>
                <BalanceTxt>Spent Today</BalanceTxt>
                <RealBal>
                  <NumberFormat
                    value={2456981}
                    thousandSeparator={true}
                    prefix={"$"}
                    displayType={"text"}
                  />
                </RealBal>
              </Balance>
              <IconCircle color="#4C6FFF">
                <LoaderSVG src={Vector} />
              </IconCircle>
            </BalanceBar>
            <IncBar>
              <SuccessBadge>+30%</SuccessBadge>
              <SubDesrip>compared to one day ago</SubDesrip>
            </IncBar>
          </CardDiv>
          <CardDiv>
            <BalanceBar>
              <Balance>
                <BalanceTxt>Monthly Spent</BalanceTxt>
                <RealBal>
                  <NumberFormat
                    value={2456981}
                    thousandSeparator={true}
                    prefix={"$"}
                    displayType={"text"}
                  />
                </RealBal>
              </Balance>
              <IconCircle color="#68DBF2">
                <LoaderSVG src={calendarMonth} />
              </IconCircle>
            </BalanceBar>
            <IncBar>
              <SuccessBadge>+10%</SuccessBadge>
              <SubDesrip>since last month</SubDesrip>
            </IncBar>
          </CardDiv>
        </CardContet>
        <TableContet>
          <Table columns={dashcol} data={dashdata} />
        </TableContet>
      </DashContent>
    </StyledContent>
    // </MainContent>
  );
}

export default Dashboard;
