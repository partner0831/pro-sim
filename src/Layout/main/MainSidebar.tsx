import React, { useState } from "react";
import { Link } from "react-router-dom";
import dashlogo from "assets/image/dashboard/dashlogo.png";

// @import language
import { t } from "businessobjects/Language";
import { logout } from "businessobjects/User";
//@import svg
import dashboard from "assets/image/sidebar/dashboard.svg";
import account from "assets/image/sidebar/account.svg";
import lgout from "assets/image/sidebar/logout.svg";
import messages from "assets/image/sidebar/messages.svg";
import notifications from "assets/image/sidebar/notifications.svg";
import offers from "assets/image/sidebar/offers.svg";
import profile from "assets/image/sidebar/profile.svg";
import setting from "assets/image/sidebar/setting.svg";
import transactions from "assets/image/sidebar/transactions.svg";
import { CommonBadge, DangerBadge } from "components/Bagde";

export function LoaderSVG({ children, src }: any) {
  return (
    <img
      className="w-4 h-4 cursor-pointer stroke-indijao"
      src={src}
      alt="LoaderSVG"
    >
      {children}
    </img>
  );
}
export function RenderItem({ current, selected, setSelected, children }: any) {
  return (
    <div
      className={`flex flex-row no-underline ${
        current === selected ? "border-l-2 border-indijao" : ""
      }`}
    >
      <Link
        to={`/${selected.toLowerCase()}`}
        style={{ textDecoration: "none" }}
        onClick={() => {
          setSelected(selected);
        }}
      >
        <div className="flex flex-row items-center">
          <div className={`${current === selected ? "ml-sb" : "ml-6"} mr-5`}>
            {children}
          </div>
          <div
            className={`${
              selected === "Settings" ? "text-indijao" : "text-formtext"
            } text-sm font-semibold`}
          >
            {t(selected)}
          </div>
        </div>
      </Link>
    </div>
  );
}

function MainSidebar() {
  const [selected, setSelected] = useState("dashboard");
  const setPath = async (str: string) => {
    await setSelected(str);
    // await history.push(`/${str.toLowerCase()}`);
  };
  return (
    <div className="w-64 border-r border-bordercolor sm:hidden ">
      <div className="mt-7 ml-12 mb-16">
        <img className="w-26 h-10" src={dashlogo} alt="logo" />
      </div>
      <div
        className="flex flex-col pb-8 justify-between pr-6 space-y-8 "
        style={{ height: "calc(100% - 5.75rem)" }}
      >
        <div className="space-y-8">
          <RenderItem
            current={selected}
            selected="dashboard"
            setSelected={setPath}
          >
            <LoaderSVG src={dashboard} />
          </RenderItem>
          <RenderItem
            current={selected}
            selected="Transactions"
            setSelected={setPath}
          >
            <LoaderSVG src={transactions} />
          </RenderItem>
          <div className="flex flex-row items-center justify-between">
            <RenderItem
              current={selected}
              selected="Messages"
              setSelected={setPath}
            >
              <LoaderSVG src={messages} />
            </RenderItem>
            <CommonBadge>6</CommonBadge>
          </div>
          <RenderItem
            current={selected}
            selected="Offers"
            setSelected={setPath}
          >
            <LoaderSVG src={offers} />
          </RenderItem>
          <RenderItem
            current={selected}
            selected="Profile"
            setSelected={setPath}
          >
            <LoaderSVG src={profile} />
          </RenderItem>

          <div className="mt-10">
            <RenderItem
              current={selected}
              selected="Settings"
              setSelected={setPath}
            >
              <LoaderSVG src={setting} />
            </RenderItem>
          </div>
          <div className="flex flex-row items-center justify-between">
            <RenderItem
              current={selected}
              selected="Notifications"
              setSelected={setPath}
            >
              <LoaderSVG src={notifications} />
            </RenderItem>
            <DangerBadge>23</DangerBadge>
          </div>
        </div>

        <div className="space-y-8">
          <RenderItem
            current={selected}
            selected="Account"
            setSelected={setPath}
          >
            <LoaderSVG src={account} />
          </RenderItem>
          <RenderItem current={selected} selected="Logout" setSelected={logout}>
            <LoaderSVG src={lgout} />
          </RenderItem>
        </div>
      </div>
    </div>
  );
}

export default MainSidebar;
