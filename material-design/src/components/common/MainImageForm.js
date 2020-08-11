import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs>
          <img width="1000" height="700" src="https://baltonj.com/web/product/big/201512/220_shop1_343844.png" />
        </Grid>
        <Grid item xs></Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs>
          <img width="1000" height="700" src="https://lh3.googleusercontent.com/proxy/FRgGOW0zk5MF-ZqKtr3ap-cX0NyeIn3OL46VdusFvPmzDmdEP89Vd2wmNd8yI5B3Q8gjZ1LJdNq0wuEPNuaWfK0mzcGobBJJw_iRhA" />
        </Grid>
        <Grid item xs></Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs>
          <img width="1000" height="700" src="https://lh3.googleusercontent.com/proxy/kRGFkCX-mD_P_lHVb3rLGIPNdG7lS6dAYpTwZUFxdA0e3ItY9b4MFmu_FRu1izY7W8FyKAdbKrg4v7IatqSMHgp-eZVbg7I03kZWBsbHt2vRhvHcgVNqpFPNYfaTbaNE6fZXZXekbK18p7I0M4dZi8mEPNqJm60YexrZdTEhQDGP-lIr_SxaHKfVnoKG4EUb9NhqZLQuZqSH9BHbRbKC2Jv6XcSgi8EqPIEw-1Y4ULg1K-k1EbebCFBiiA7_41rUmQWKLnPYqNNM-Vs-3E_XHDqPULOF_9b3GuVU9OOPEkTquQ" />
        </Grid>
        <Grid item xs></Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs>
          <img width="1000" height="700" src="https://lh3.googleusercontent.com/proxy/fl_H6QYvLR0Hqw_ZQDk4CAqQTL3sGqugYh2_xx756IwkG_COPP06nAQgkq9ZJ6QV1ifIWqfCpVz1TmnX13fRUJHzZwjRhH0WJyrObCISkVq4i-ToiVSa-r8YWAk8dH3DTrKtSD0eTZ2oEg8w-7zbGFqCGTFDjXV6GJsbCkQIq90-" />
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}
