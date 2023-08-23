import React from "react";
import Box from "@mui/material/Box";
import Sidenav from "../components/Sidenav";
import Navbarj from "../components/Navbarj";
import BarChart from "../charts/BarChart";
import AccordionDash from "../components/AccordionDash";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import "../Dash.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BarChartHorizontal from "../charts/BarChartHorizontal";
import GeoChart from "../charts/GeoChart";
import PieChart from "../charts/PieChart";
import CountUp from "react-countup";

function Analytics() {
  return (
    <>
      <div className="bgcolor">
        <Navbarj />
        <Box height={55} />
        <Box sx={{ display: "flex"}}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={5} sx={{ padding: "2px" }}>
                <Grid container spacing={0}>
                  <Grid xs={6} sx={{ padding: "5px" }}>
                    <Box>
                      <Card
                        sx={{
                          maxWidth: 47 + "vw",
                          minHeight: 20 + "vh",
                          height: 172,
                        }}
                        className="gradient"
                      >
                        <CardContent>
                          <div className="iconstyle">
                            <CreditCardIcon />
                          </div>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "#ffffff" }}
                          >
                            {/* for display diff number animation */}
                            <CountUp delay={0.2} end={4000} duration={1} />
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            component="div"
                            sx={{ color: "#ccd1d1" }}
                          >
                            Total Earnings
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  </Grid>
                  <Grid xs={6} sx={{ padding: "5px" }}>
                    <Card
                      sx={{
                        maxWidth: 47 + "vw",
                        minHeight: 20 + "vh",
                        height: 172,
                      }}
                      className="gradientlight"
                    >
                      <CardContent>
                        <div className="iconstyle">
                          <CreditCardIcon />
                        </div>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#ffffff" }}
                        >
                          <CountUp delay={0.2} end={7000} duration={1} />
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                          sx={{ color: "#ccd1d1" }}
                        >
                          Total Earnings
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid xs={6} sx={{ padding: "5px" }}>
                    <Card
                      sx={{
                        maxWidth: 47 + "vw",
                        minHeight: 20 + "vh",
                        height: 172,
                      }}
                      className="gradientlight"
                    >
                      <CardContent>
                        <div className="iconstyle">
                          <CreditCardIcon />
                        </div>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#ffffff" }}
                        >
                          <CountUp delay={0.2} end={5000} duration={1} />
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                          sx={{ color: "#ccd1d1" }}
                        >
                          Total Earnings
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid xs={6} sx={{ padding: "5px" }}>
                    <Card
                      sx={{
                        maxWidth: 47 + "vw",
                        minHeight: 20 + "vh",
                        height: 172,
                      }}
                      className="gradient"
                    >
                      <CardContent>
                        <div className="iconstyle">
                          <CreditCardIcon />
                        </div>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#ffffff" }}
                        >
                          <CountUp delay={0.3} end={2000} duration={1} />
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                          sx={{ color: "#ccd1d1" }}
                        >
                          Total Earnings
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={7}>
                <BarChartHorizontal />
              </Grid>
              <Grid item xs={7}>
                <GeoChart />
              </Grid>
              <Grid item xs={5}>
                <PieChart />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Analytics;
