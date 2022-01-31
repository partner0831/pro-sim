import React from "react";
import styled from "styled-components";

type StyleProps = {
  children: React.ReactNode;
  color?: any;
  width?: any;
  onClick?: any;
};

export function StyledCircle({ children, color, width, onClick }: StyleProps) {
  return (
    <div
      style={{ background: color, width: width }}
      onClick={onClick}
      className="flex flex-col justify-center items-center cursor-pointer w-11 h-11 rounded-full"
    >
      {children}
    </div>
  );
}

type Props = {
  children?: React.ReactNode;
  color?: string;
  onClick?: any;
  width?: any;
};

export const IconCircle: React.FC<Props> = ({
  children,
  onClick,
  color,
  width,
}: Props) => {
  return (
    <StyledCircle color={color} onClick={onClick}>
      {children}
    </StyledCircle>
  );
};
