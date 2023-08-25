import { Button, Typography, Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../components/Logo";

import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";

const Home = ({ setAuth }) => {
  const theme = useTheme();

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "30vh",
        }}
      >
        <Box sx={{ mb: 5, mt: -10 }}>
          <Logo />
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "5rem",
            fontWeight: 700,
            letterSpacing: "-0.5rem",
            display: "inline-block",
            whiteSpace: "nowrap",
            [theme.breakpoints.down("sm")]: {
              fontSize: "4rem",
              letterSpacing: "-0.4rem",
            },
          }}
          gutterBottom
        ></Typography>

        <Button size="large" variant="contained" onClick={() => setAuth(false)}>
          Log out
        </Button>
      </Container>
      <ScheduleComponent width="100%">
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </>
  );
};

export default Home;
