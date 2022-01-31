import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
// import axios from 'axios'
// @import Emoji
import Emoji from "a11y-react-emoji";
import { store } from "react-notifications-component";
// @import component
import Input from "components/Input";
import Button from "components/Button";
// import { Button as CustomButton } from "components/CustomButton";
// @import assets
import Apple from "assets/image/auth/apple.png";
import Google from "assets/image/auth/google.png";
// @import utils
import { loginPin } from "businessobjects/User";
import isEmpty from "utils/isEmpty";
// @import language
import { t } from "businessobjects/Language";
// @import style
import {
  MainContent,
  StyledContainer,
  StyledContent,
  WelcomeDiv,
  HeaderText,
  SubText,
  EmailDiv,
  PassDiv,
  FormText,
  ModDiv,
  SmallText,
  SocialView,
  SocialIcon,
  FacebookLetter,
  SocialImg,
  FooterContainer,
  FooterText,
  FooterClickText,
} from "./style";

function Login() {
  const [username, setUsername] = useState<string>("+31613759336");
  const [password, setPassword] = useState<string>("1234");
  const [userFlag, setUserFlag] = useState<any>(null);
  const [passFlag, setPassFlag] = useState<any>(null);

  const [loggedIn, set_loggedIn] = useState(false);
  const onChange = async (str: string) => {
    setUsername(str);
    if (isEmpty(str)) {
      setUserFlag(true);
    } else {
      setUserFlag(false);
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
  const onSubmit = async () => {
    if (isEmpty(username)) {
      setUserFlag(true);
    }
    if (isEmpty(password)) {
      setPassFlag(true);
    }
    if (!isEmpty(username) && !isEmpty(password)) {
      const result = await loginPin(username, password);

      if (result.result) {
        set_loggedIn(true);
      } else {
        store.addNotification({
          title: "Login Faild",
          message: "Please try again!",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: { duration: 2000 },
        });
      }
    }
  };
  return loggedIn ? (
    <>
      <Redirect to={{ pathname: "/dashboard" }} />
    </>
  ) : (
    <MainContent>
      <StyledContainer>
        <StyledContent>
          <WelcomeDiv>
            <Emoji symbol="👋" label="welcome" />
          </WelcomeDiv>
          <HeaderText>{t("login.welcome")}</HeaderText>
          <SubText>{t("login.description")}</SubText>
          <EmailDiv>
            <FormText> {t("E-mail or phone number")}</FormText>
            <Input
              onChange={onChange}
              placeholder={t("login.plhtype")}
              value={username}
              type={t("text")}
              flag={userFlag}
            />
          </EmailDiv>
          <PassDiv>
            <FormText>{t("login.labelpassword")}</FormText>
            <Input
              onChange={onChangePass}
              placeholder="********"
              value={password}
              type={t("login.labelpassword")}
              flag={passFlag}
            />
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
              {t("Sign in")}
            </Button>
          </ModDiv>
          <ModDiv>
            <SmallText>{t("or do it via other accounts")}</SmallText>
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
        <FooterText>{t("Don’t have an account?")}</FooterText>
        <Link to="/register">
          <FooterClickText>{t("Get started")}</FooterClickText>
        </Link>
      </FooterContainer>
    </MainContent>
  );
}

export default Login;
