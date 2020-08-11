import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 200,
    height: 200,
  },
  img: {
    margin: "auto", 
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function NestedGrid() {
  const classes = useStyles();
  // function FormRow() {
  //   return (
  //     <h1 style={{ color: "#B40431", verticalalign: "baseline"}}>
  //       상품정보
  //     </h1>
  //   );
  // }
  function FormRow1() {
    
    return (
      <React.Fragment>
        {/* 1열 */}
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="https://lh3.googleusercontent.com/proxy/KbbNQ_h9it80JRAhxJcx4AO_6e3d-Nxm_EOY7LqYw1Ks788s8dzAcN0uURweD3l5N_c0MBkfcAeL0piuOVzEGjULqmFWdvW259sZ9ty5isfZF0lsvA"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Standard license
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">$11.00</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
        {/* 2열 */}
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="https://lh3.googleusercontent.com/proxy/AHsPbXtaRFq4bYwtAvYI8Y4sUVn60kcmqs3Lzif4CE71X87ew9AykYHgrU5_bW0TF9ovEQvlzeh85axYkmuB8-4P_1d03FSFX_4qWhCsONSPtc61Ya635MWLs2zOExB0YgNE"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Standard license
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">$12.00</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* 3열 */}
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="https://t1.daumcdn.net/cfile/tistory/2206CC4C58BF64EE15"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Standard license
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">$13.00</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow2() {
    return (
      <React.Fragment>
        {/* 1열 */}
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="data:image/jpeg;base64,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"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Standard license
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">$14.00</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* 2열 */}
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0vos9ZFkggKsmtHvk84ART8ZhFOLQbNMALg&usqp=CAU"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Standard license
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">$15.00</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* 3열 */}
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnTFWPFWeqoeuZt1iMunsmrxtVXuAeqGkXcw&usqp=CAU"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Standard license
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">$16.00</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow3() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="data:image/jpeg;base64,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"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Standard license
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">$17.00</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* 2열 */}
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="https://m.zools.co.kr/web/product/big/20200310/b68c04fd92765ffcf16b972e13f518c0.jpg"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Standard license
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">$18.00</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* 3열 */}
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="https://m.artreptile.com/file_data/rudgh401/2019/05/06/b18d53816d18c92d9005a990410bf82e.jpg"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Standard license
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">$19.00</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      {/* <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid> */}
        <Grid container item xs={12} spacing={3}>
          <FormRow1 />
        </Grid>

        <Grid container item xs={12} spacing={3}>
          <FormRow2 />
        </Grid>

        <Grid container item xs={12} spacing={3}>
          <FormRow3 />
        </Grid>

      </Grid>
    </div>
  );
}
