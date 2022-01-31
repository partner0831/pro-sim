import React, { useState } from "react";
import { Link } from "react-router-dom";
// @import component
import Input from "components/Input";
import Button from "components/Button";
// @import assets
import logo from "assets/image/auth/simsec_logo.png";
import Apple from "assets/image/auth/apple.png";
import Google from "assets/image/auth/google.png";
// @import utils
import isEmpty from "utils/isEmpty";
// @import language
import { t } from "businessobjects/Language";
// @import style
import {
  MainContent,
  StyledContainer,
  StyledContent,
  LogoView,
  LogoImg,
  HeaderText,
  SubText,
  EmailDiv,
  PassDiv,
  FormText,
  ModDiv,
  TermText,
  TermCheck,
  SmallText,
  SocialView,
  SocialIcon,
  FacebookLetter,
  SocialImg,
  FooterContainer,
  FooterText,
  FooterClickText,
  // BoldText,
  Description,
} from "./style";

function Register() {
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [userFlag, setUserFlag] = useState<any>(null);
  const [phoneFlag, setPhoneFlag] = useState<any>(null);
  const [passFlag, setPassFlag] = useState<any>(null);
  const onChangeusername = (str: string) => {
    setUsername(str);
    if (isEmpty(str)) {
      setUserFlag(true);
    } else {
      setUserFlag(false);
    }
  };
  const onChangePhone = (str: string) => {
    setPhonenumber(str);
    if (isEmpty(str)) {
      setPhoneFlag(true);
    } else {
      setPhoneFlag(false);
    }
  };
  const onChangePass = (str: string) => {
    setPassword(str);
    if (isEmpty(str)) {
      setPassFlag(true);
    } else {
      setPassFlag(false);
    }
  };
  const onSubmit = () => {
    if (isEmpty(username)) {
      setUserFlag(true);
    }
    if (isEmpty(phonenumber)) {
      setPhoneFlag(true);
    }
    if (isEmpty(password)) {
      setPassFlag(true);
    }
    if (!isEmpty(username) && !isEmpty(phonenumber) && !isEmpty(password)) {
      console.log("asdfsadf");
    }
  };

  return (
    <MainContent>
      <StyledContainer>
        <StyledContent>
          <LogoView>
            <LogoImg src={logo} />
          </LogoView>
          <HeaderText>{t("Create your account")}</HeaderText>
          <SubText>{t("It’s free and easy")}</SubText>
          <EmailDiv>
            <FormText>{t("Your name")}</FormText>
            <Input
              onChange={onChangeusername}
              placeholder={t("Enter your name")}
              value={username}
              type={t("text")}
              flag={userFlag}
            />
          </EmailDiv>
          <PassDiv>
            <FormText>{t("E-mail or phone number")}</FormText>
            <Input
              onChange={onChangePhone}
              placeholder={t("login.plhtype")}
              value={phonenumber}
              type={t("text")}
              flag={phoneFlag}
            />
          </PassDiv>
          <PassDiv>
            <FormText>{t("Password")}</FormText>
            <Input
              onChange={onChangePass}
              placeholder={t("Type your password")}
              value={password}
              type={t("Password")}
              info={t("Must be 8 characters at least")}
              flag={passFlag}
            />
          </PassDiv>
          <PassDiv>
            <TermText>
              <TermCheck type="checkbox" />
              <Description>{t("create.checktxt")}</Description>
            </TermText>
          </PassDiv>
          <ModDiv>
            <Button
              border="none"
              color="#4C6FFF"
              onClick={() => {
                onSubmit();
              }}
              width="100%"
            >
              {t("Register")}
            </Button>
          </ModDiv>
          <ModDiv>
            <SmallText> {t("or do it via other accounts")}</SmallText>
          </ModDiv>
          <ModDiv>
            <SocialView>
              <SocialIcon>
                <SocialImg src={Google} />
              </SocialIcon>
              <SocialIcon>
                <SocialImg src={Apple} />
              </SocialIcon>
              <SocialIcon>
                <FacebookLetter>f</FacebookLetter>
              </SocialIcon>
            </SocialView>
          </ModDiv>
        </StyledContent>
      </StyledContainer>
      <FooterContainer>
        <FooterText>{t("Already have an account?")}</FooterText>
        <Link to="/login">
          <FooterClickText>{t("Sign in")}</FooterClickText>
        </Link>
      </FooterContainer>
    </MainContent>
  );
}

export default Register;
