export function MainContent({ children }: any) {
  return (
    <div className="flex flex-col bg-maincontent justify-between w-full min-h-screen">
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

export function WelcomeDiv({ children }: any) {
  return (
    <span className="mt-28 text-bv not-italic font-bold text-left">
      {children}
    </span>
  );
}

export function HeaderText({ children }: any) {
  return (
    <span className="font-semibold text-av xs:text-sm text-logintext mt-7">
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
  return <div className="flex flex-col mt-14">{children}</div>;
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
    <img className="h-6 w-5" src={src} alt="semsic">
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
