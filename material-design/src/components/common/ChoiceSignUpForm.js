import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import { green } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const SignUpForm = styled.div`
  width: 530px;
  height: 500px;
  border: 0px solid;
  transform: translate(130%, 30%);
  text-align: center;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      backgroundColor: green[50],
    },
    width: 200,
    position: "relative",
    minHeight: 200,
  },
}));

export default function FloatingActionButtonZoom() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <div className={classes.root}>
      <SignUpForm>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            <Tab label="개인 회원" {...a11yProps(0)} />
            <Tab label="사업자 회원" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <br />
            <h2 >우리 사이트에 오신것을 환영합니다.</h2>
            <h3>지금 회원가입을 하신 후 다양한 서비스를 만나보세요 </h3>
            <br />
            <br />
            <br />
            <Button href="/pulicSign"variant="contained" color="primary">
              회원가입
            </Button>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <br />
            <h2>우리 사이트에 오신것을 환영합니다.</h2>
            <h3>지금 회원가입을 하신 후 다양한 서비스를 만나보세요 </h3>
            <br />
            <br />
            <br />
            <Button href="/businessSign"variant="contained" color="primary">
              회원가입
            </Button>
          </TabPanel>
        </SwipeableViews>
      </SignUpForm>
    </div>
  );
}
