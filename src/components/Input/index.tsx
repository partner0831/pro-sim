import React from "react";
import styled from "styled-components";

export function CustomInput({ children }: any) {
  return <div className="flex flex-col">{children}</div>;
}
type ErrorProps = {
  flag: any;
};
const StyledInput = styled.input<ErrorProps>`
  margin: 8px 0 8px 0;
  box-shadow: 0px 1px 2px rgba(50, 50, 71, 0.08),
    0px 0px 1px rgba(50, 50, 71, 0.2);
  border-radius: 6px;
  background: #ffffff;
  height: 46px;
  outline: none;
  color: ${({ flag }) => (flag ? "1px solid #F16063;" : "none")};
  border: ${({ flag }) => (flag ? "1px solid #F16063;" : "none")};
  padding: 0 0 0 16px;
  font-size: 15px;
  @media screen and (max-width: 360px) {
    font-size: 12px;
  }
  font-weight: 500;
  text-align: left;
`;

export function ErrorText({ children }: any) {
  return <div className="text-xs font-normal text-danger">{children}</div>;
}

export function InfoText({ children }: any) {
  return <div className="text-xs font-normal text-ligtext">{children}</div>;
}

type Props = {
  onChange: (str: string) => void;
  placeholder: string;
  value?: string;
  type: string;
  info?: string;
  error?: string;
  flag?: any;
};

const Input: React.FC<Props> = ({
  onChange,
  placeholder,
  value = "",
  type,
  info = "",
  error = "Required field",
  flag,
}: Props) => {
  return (
    <CustomInput>
      <StyledInput
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        value={value}
        type={type}
        flag={flag}
      />
      {flag && <ErrorText>{error}</ErrorText>}
      {info && !flag && <InfoText>{info}</InfoText>}
    </CustomInput>
  );
};
Input.defaultProps = {
  value: "",
  info: "",
  error: "Required field",
  flag: null,
};

export default Input;
