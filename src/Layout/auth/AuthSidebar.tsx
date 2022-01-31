import React from "react";
// @import styled component
import styled from "styled-components";
import auth_logo from "assets/image/auth/simsec_blue.png";
import Bank from "assets/image/auth/Bank.png";
import Coin from "assets/image/auth/Coin.png";
import Money from "assets/image/auth/Money.png";
// @import language
import { t } from "businessobjects/Language";

const SidebarContent = styled.div`
  min-height: 100vh;
  @media screen and (min-width: 920px) {
    display: flex;
  }
  @media screen and (max-width: 920px) {
    display: none;
  }
  flex-direction: column;
  background-color: #4c6fff;
  width: 586px;
  height: auto;
`;
const LogoImg = styled.img`
  height: 90px;
  width: 228px;
  margin-top: 21px;
  margin-left: 76px;
`;
const MainText = styled.span`
  height: 101px;
  width: 433px;
  margin-left: 76px;
  margin-right: 77px;
  margin-top: 142px;
  font-size: 40px;
  font-weight: bold;
  text-align: left;
  color: #ffffff;
`;

export function Description({ children, src }: any) {
  return (
    <span className="cursor-pointer text-commontext h-30 text-lg mt-6 mr-20 font-normal ml-20">
      {children}
    </span>
  );
}
export function BankImg({ children, src }: any) {
  return (
    <img
      className="h-28 w-28 cursor-pointer mt-16 ml-80"
      src={src}
      alt="LoaderSVG"
    >
      {children}
    </img>
  );
}

export function CoinImg({ children, src }: any) {
  return (
    <img
      className="h-28 w-28 cursor-pointer mt-11 ml-11"
      src={src}
      alt="LoaderSVG"
    >
      {children}
    </img>
  );
}

export function MoneyImg({ children, src }: any) {
  return (
    <img
      className="h-32 w-32 cursor-pointer mt-3 ml-72"
      src={src}
      alt="LoaderSVG"
    >
      {children}
    </img>
  );
}
export const AuthSidebar: React.FC = () => {
  return (
    <SidebarContent>
      <LogoImg src={auth_logo} />
      <MainText>{t("One app, all things money")}</MainText>
      <Description>{t("sidebar.description")}</Description>
      <BankImg src={Bank} />
      <CoinImg src={Coin} />
      <MoneyImg src={Money} />
    </SidebarContent>
  );
};

export default AuthSidebar;
