import styled from "styled-components";

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 16rem);

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
// export function StyledContent({ children }: any) {
//   return (
//     <div
//       className="flex flex-col sm:w-full menu"
//       style={{ width: "calc(100vw - 16rem)" }}
//     >
//       {children}
//     </div>
//   );
// }

// export function StyledContent({ children }: any) {
//   return <div className="flex flex-col">{children}</div>;
// }

export function AvatarContainer({ children }: any) {
  return (
    <div className="flex flex-row justify-between items-center p-7 border border-bordercolor xs:flex-col">
      {children}
    </div>
  );
}

export function AvatarContent({ children }: any) {
  return <div className="flex flex-row items-center h-34">{children}</div>;
}

export function AvatarImg({ children, src }: any) {
  return (
    <img
      src={src}
      className="w-20 h-20 border border-bordercolor rounded-full"
      alt="simsec"
    >
      {children}
    </img>
  );
}

export function AvatarInfo({ children }: any) {
  return <div className="flex flex-col ml-6">{children}</div>;
}

export function AvatarName({ children }: any) {
  return (
    <span className="text-av font-semibold xs:text-mv break-all">
      {children}
    </span>
  );
}

export function AvatarSet({ children }: any) {
  return (
    <span className="grid grid-cols-2 grid-rows-1 gap-8 mt-4">{children}</span>
  );
}
export function AvatarPro({ children }: any) {
  return <span className="flex flex-row items-center">{children}</span>;
}

export function TxtProfile({ children }: any) {
  return (
    <span className="font-semibold text-ligtext ml-2.5 text-sm cursor-pointer">
      {children}
    </span>
  );
}

export function TxtBadge({ children }: any) {
  return (
    <span className="font-semibold text-success ml-2.5 text-sm">
      {children}
    </span>
  );
}
export const ButtonBar = styled.div`
  margin: 30px 0 21.5px;
`;
// export function ButtonBar({ children }: any) {
//   return <div className="mt-av mb-h[21.5px]">{children}</div>;
// }

export function DashContent({ children }: any) {
  return <div className="flex flex-col px-7 mb-5">{children}</div>;
}

export function LoaderSVG({ children, src }: any) {
  return (
    <img className="w-4 h-4 cursor-pointer" src={src} alt="LoaderSVG">
      {children}
    </img>
  );
}
export const SliderContet = styled.div`
  width: 100%;
  dispaly: flex !important;
  border: 1px solid #edf2f7;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24),
    0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  align-items: center;
`;
export const SlideItemBody = styled.div`
  cursor: pointer;
  display: flex !important;
  width: 310px !important;
  height: 197px;
  @media only screen and (max-width: 430px) {
    width: 200px !important;
    height: 150px;
  }
  background-image: linear-gradient(to right, #d665ff, #4c6fff);
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24),
    0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 16px;
  margin-left: 20px;
  flex-direction: column;
  align-items: center;
`;
export const CommonBankBody = styled.div`
  cursor: pointer;
  display: flex !important;
  justify-content: center;
  width: 310px !important;
  height: 197px;
  @media only screen and (max-width: 430px) {
    width: 200px !important;
    height: 150px;
  }

  background: #edf2f7;
  border-radius: 16px;
  margin-left: 20px;
`;

export const BankSmallCard = styled.div`
  display: flex !important;
  margin-top: 19.5px;
  width: 146.55px;
  height: 100px;
  background: #101225;
  border-radius: 16px;
  padding: 17px 15px;
  flex-direction: column;
  justify-content: space-between;
`;
export function BankHeader({ children }: any) {
  return <div className="flex justify-between">{children}</div>;
}

export const WhiteSmallCard = styled.div`
  height: 18.96551513671875px;
  width: 22.413793563842773px;
  border-radius: 0px;
  background: #ebf2fa;
  border-radius: 6px;
  margin-top: 10.24px;
`;
export const BankCard = styled.div`
  dispaly: flex !important;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 28.5px;
  width: 205.17px;
  height: 140px;
  background: #101225;
  border-radius: 16px;
  padding: 24.66px 21.54px 24.52px 19.31px;
`;
export const WhiteCard = styled.div`
  height: 26.551727294921875px;
  width: 31.379310607910156px;
  border-radius: 0px;
  background: #ebf2fa;
  border-radius: 6px;
  margin-top: 14.34px;
`;

export function CardContet({ children }: any) {
  return (
    <span className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-8 mt-av">
      {children}
    </span>
  );
}
export const CardDiv = styled.div`
  height: 129px;
  border: 1px solid #edf2f7;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24),
    0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 24px 24px 0;
`;

export function BalanceBar({ children }: any) {
  return <div className="flex flex-row justify-between">{children}</div>;
}
export function Balance({ children }: any) {
  return <div className="flex flex-col">{children}</div>;
}

export function BalanceTxt({ children }: any) {
  return <div className="text-xs text-ligtext font-semibold">{children}</div>;
}

export function RealBal({ children }: any) {
  return (
    <span className="text-balancetext font-semibold text-xl mt-1">
      {children}
    </span>
  );
}

export function IncBar({ children }: any) {
  return <div className="flex flex-row items-center m-2.5">{children}</div>;
}

export function SubDesrip({ children }: any) {
  return (
    <div className="text-bs font-medium text-ligtext ml-5">{children}</div>
  );
}

export function ArrowTxt({ children }: any) {
  return <div className="text-commontext">{children}</div>;
}

export const NextArrow = styled.div`
  position: absolute;
  right: -25px;
  top: 50%;
  border-radius: 50%;
  background: #e4ecf7;
  color: #000000;
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  cursor: pointer;
`;
export const PrevArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -25px;
  top: 50%;
  border-radius: 50%;
  background: #e4ecf7;
  color: #000000;
  width: 46px;
  height: 46px;
  z-index: 99;
  cursor: pointer;
`;
export function TableContet({ children }: any) {
  return <div className="mt-av overflow-x-scroll">{children}</div>;
}
