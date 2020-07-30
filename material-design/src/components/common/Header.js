import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const NavList = styled.ul`
  width: 450px;
  font-size: 1.3rem;
`;
const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: "#ffffff",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function Pricing({ onLogout, user }) {
  const classes = useStyles();
  let UserId = null;

  if (user) {
    UserId = user.replace(/['"]+/g, "");
    console.log(UserId);
  }
  useEffect(() => {
    console.log("Header Render!!!!!!!");
  }, [UserId]);
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link href="/">LOGO</Link>
          </Typography>

          <NavList>홈</NavList>
          <NavList>상품</NavList>
          <NavList>FAQ</NavList>

            {user ? (
              <Link
                href={`/userInfo/${UserId}`}
                color="textPrimary"
                className={classes.link}
              >
                내정보
              </Link>
            ) : (
              <div></div>
            )}
   
          {user ? (
            <div>
              <Button
                color="primary"
                variant="outlined"
                className={classes.link}
                onClick={onLogout}
              >
                로그아웃
              </Button>
            </div>
          ) : (
            <div>
              {user}
              <Button
                href="/mainLogin"
                color="green"
                variant="outlined"
                className={classes.link}
              >
                로그인
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
