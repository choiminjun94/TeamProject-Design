import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const LeftLogin = styled.div`
  width: 530px;
  height: 800px;
  border: 0px solid;
  transform: translate(200%, -89.9%);
`;
const Logo = styled.div`
  width: 550px;
  text-align: center;
  font-size: 50px;
  height: 200px;

  font-family: 'Nanum Pen Script', cursive;
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  font-size: 35px;
  background-color: #d8d8d8;
  color: #ffffff;
  transform: translate(40%, 400%);
  border: 0;
  outline: 0;
  border-radius: 20px;
  font-family: 'Nanum Pen Script', cursive;

`;
const LinkStyle = styled.div`
  font-size: 20px;
  text-align: right;
  padding-right: 10px;
`;

const LinkStyle2 = styled.div`
  font-size: 20px;
  text-align: right;
  padding-right: 10px;
  transform: translate(-36%, 1000%);
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
    <LeftLogin>
      <form className={classes.root} noValidate autoComplete="off">
        <br />
        <Logo link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet">사업자</Logo>

        <div>
          <TextField
            TextField
            required
            id="standard-required"
            label="아이디 입력"
          />
          <br />
          <br />
          <br />
          <TextField
            id="standard-password-input"
            label="비밀번호 입력"
            type="password"
            autoComplete="current-password"
          />
          <Typography className={classes.root}>
            <LinkStyle>
              <Link href="#" onClick={preventDefault}>
                비밀번호 찾기
              </Link>
            </LinkStyle>
          </Typography>
          <Button type="submit">로그인 시발</Button>
          <Typography className={classes.root}>
            <LinkStyle2>
            <Link href="#" onClick={preventDefault} ink href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet">
                회원 가입하기
              </Link>
            </LinkStyle2>
          </Typography>
        </div>
      </form>
    </LeftLogin>
  );
}
