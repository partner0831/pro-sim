export function MainContent({ children }: any) {
  return (
    <div className="flex flex-col bg-maincontent w-full min-h-screen">
      {children}
    </div>
  );
}

export function StyledContainer({ children }: any) {
  return (
    <div className="flex flex-col items-center min-h-screen px-10 xl:pr-40 xl:pl-32">
      {children}
    </div>
  );
}

export function StyledContent({ children }: any) {
  return <div className="flex flex-col w-full">{children}</div>;
}

export function LogoView({ children }: any) {
  return (
    <div className="flex justify-center items-center mt-1.5">{children}</div>
  );
}

export function LogoImg({ children, src }: any) {
  return (
    <img className="w-47 h-23" src={src} alt="simesec">
      {children}
    </img>
  );
}
export function HeaderText({ children }: any) {
  return (
    <span className="font-semibold text-av xs:text-2xl text-logintext mt-7">
      {children}
    </span>
  );
}

export function SubText({ children }: any) {
  return (
    <span className="font-normal text-base text-logintext mt-3 h-24">
      {children}
    </span>
  );
}

export function FormText({ children }: any) {
  return <span className="font-medium text-sm text-formtext ">{children}</span>;
}

export function EmailDiv({ children }: any) {
  return <div className="flex flex-col mt-12">{children}</div>;
}

export function PassDiv({ children }: any) {
  return <div className="flex flex-col mt-7">{children}</div>;
}

export function ModDiv({ children }: any) {
  return (
    <div className="flex flex-row mt-7 justify-center items-center">
      {children}
    </div>
  );
}
export function SmallText({ children }: any) {
  return (
    <span className="flex flex-row mt-7 justify-center text-xs font-normal text-center text-ligtext">
      {children}
    </span>
  );
}
export function TermText({ children }: any) {
  return <span className="flex items-center">{children}</span>;
}

export function TermCheck({ children, type }: any) {
  return (
    <input className="w-5 h-5" type={type}>
      {children}
    </input>
  );
}

export function SocialView({ children }: any) {
  return <div className="grid grid-cols-3 grid-rows-1 gap-4">{children}</div>;
}

export function SocialIcon({ children }: any) {
  return (
    <div className="flex flex-row justify-center items-center h-14 w-16 rounded-xl bg-white shadow-si cursor-pointer">
      {children}
    </div>
  );
}
export function FacebookLetter({ children }: any) {
  return (
    <div className="h-11 w-3.5 text-fv font-bold text-facebook">{children}</div>
  );
}

export function SocialImg({ src, children }: any) {
  return (
    <img className="h-6 w-5" src={src} alt="simesec">
      {children}
    </img>
  );
}
export function FooterContainer({ children }: any) {
  return (
    <div className="flex flex-row justify-end mr-12 md-5 no-underline items-center">
      {children}
    </div>
  );
}

export function FooterText({ children }: any) {
  return <span className="text-sm font-semibold text-ligtext">{children}</span>;
}

export function FooterClickText({ children }: any) {
  return (
    <span className="text-sm font-semibold text-footerclicktext cursor-pointer ml-1">
      {children}
    </span>
  );
}

// export const Description = styled.span`
//   width: calc(100% - 20px);
//   font-size: 12px;
//   font-weight: 700;
//   color: #425466;
//   margin: 0 0 0 10px;
// `;
export function Description({ children }: any) {
  return (
    <span className="text-xs font-bold text-formtext cursor-pointer ml-2.5">
      {children}
    </span>
  );
}

export function BoldText({ children }: any) {
  return (
    <span className="text-xs text-formtext cursor-pointer font-extrabold ml-2.5">
      {children}
    </span>
  );
}
