import React from "react";
import styled from "styled-components";

export function StyledButton({ children, onClick, style }: any) {
  return (
    <button
      onClick={onClick}
      style={style}
      className="text-commontext cursor-pointer text-sm rounded-lg h-11"
    >
      {children}
    </button>
  );
}
type Props = {
  border?: string;
  color?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  width?: string;
};

const Button: React.FC<Props> = ({
  border,
  color,
  children,
  onClick,
  width,
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        width,
      }}
    >
      {children}
    </StyledButton>
  );
};
export function BtnInfo({ children, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="bg-indijao rounded-lg h-11 font-semibold text-whitetext text-xs px-5"
    >
      {children}
    </button>
  );
}

export function BtnDanger({ children, onClick }: any) {
  return (
    <button
      className="bg-danger rounded-lg h-11 font-semibold text-whitetext text-xs px-5"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export function BtnAlam({ children, onClick }: any) {
  return (
    <button
      className="flex flex-row justify-center items-center space-x-2 bg-whitetext rounded-lg h-11 font-semibold text-danger text-xs px-5 border border-bordercolor"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function BtnCommon({ children, onClick }: any) {
  return (
    <button
      className="bg-common rounded-lg h-11 font-semibold text-whitetext text-xs px-5"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export function BtnNormal({ children, onClick }: any) {
  return (
    <button
      className="bg-whitetext rounded-lg h-11 font-semibold text-xs px-5 border border-bordercolor"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
