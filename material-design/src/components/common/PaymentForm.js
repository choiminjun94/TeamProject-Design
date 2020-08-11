import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import { green } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
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
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    // color: theme.palette.text.secondary,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[600],
    },
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
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

  const fabs = [
    {
      color: "primary",
      className: classes.fab,
    },
    {
      color: "secondary",
      className: classes.fab,
    },
    {
      color: "inherit",
      className: clsx(classes.fab, classes.fabGreen),
    },
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          {/* <Paper className={classes.paper}>xs=6</Paper> */}
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              width="580"
              height="400"
              src="https://baltonj.com/web/product/big/201512/220_shop1_343844.png"
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Link href="#" onClick={preventDefault}>
              제품 상세 링크
            </Link>
            <h3>레오팔트 육지 거북 준성체 -야생개체- </h3>
            <Rating name="size-small" defaultValue={2} size="small" />
            <hr />
            <h5>공동 구매 가격</h5>
            <h2 style={{ color: "#B40431" }}>12,500원</h2>
            <button
              style={{
                width: "300pt",
                height: "30pt",
                backgroundColor: "#58ACFA",
                color: "#FFFFFF",
                fontSize: "15pt",
                border: "0pt",
                outline: "0pt",
              }}
            >
              구매
            </button>
            <Grid item xs={6} sm={12}>
              <Paper className={classes.paper}>추가 사항</Paper>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          {/* <Paper className={classes.paper}>xs=6</Paper> */}
        </Grid>
        <Grid item xs={2}>
          {/* <Paper className={classes.paper}>xs=6</Paper> */}
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            {" "}
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="action tabs example"
              >
                <Tab label="상품상세" {...a11yProps(0)} />
                <Tab label="상품평" {...a11yProps(1)} />
                {/* <Tab label="상품문의" {...a11yProps(2)} /> */}
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <img
                  width="1150"
                  height="800"
                  src="https://baltonj.com/web/product/big/201512/220_shop1_343844.png"
                />
                <img
                  width="1150"
                  height="800"
                  src="https://baltonj.com/web/product/big/201711/926_shop1_605106.jpg"
                />
                <img
                  width="1150"
                  height="800"
                  src="https://m.newrunreptile.co.kr/web/product/big/201807/1229_shop1_15314906906034.jpg"
                />
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                Item Two
              </TabPanel>
              {/* <TabPanel value={value} index={2} dir={theme.direction}>
                Item Three
              </TabPanel> */}
            </SwipeableViews>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
