import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const RightLogin = styled.div`
  width: 530px;
  height: 800px;
  border: 0px solid;
  transform: translate(125%, 10%);
`;
const Logo = styled.div`
  width: 520px;
  text-align: center;
  font-size: 50px;
  height: 200px;
  font-family: "Nanum Pen Script", cursive;
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  font-size: 35px;
  background-color: #d8d8d8;
  color: #ffffff;
  transform: translate(40%, 200%);
  border: 0;
  outline: 0;
  border-radius: 20px;
  font-family: "Nanum Pen Script", cursive;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <RightLogin>
      <form className={classes.root} noValidate autoComplete="off">
        <br />
        <Logo
          link
          href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap"
          rel="stylesheet"
        >
          사업자용
        </Logo>

        <div>
          <TextField
            TextField
            required
            id="standard-required"
            label="아이디를 입력"
          />
          <br />
          <br />
          <br />
          <TextField
            id="standard-password-input"
            label="비밀번호를 입력"
            type="password"
            autoComplete="current-password"
          />
          <br />
          <br />
          <br />
          <TextField
            TextField
            required
            id="standard-required"
            label="이름을 입력하세요"
          />
          <br />
          <br />
          <br />
          <TextField
            TextField
            required
            id="standard-required"
            label="Email을 입력하세요"
          />
          <br />
          <br />
          <br />
          <TextField
            TextField
            required
            id="standard-required"
            label="핸드폰 번호를 입력하세요"
          />
          <Button type="submit">회원가입 하깅</Button>
        </div>
      </form>
    </RightLogin>
  );
}
