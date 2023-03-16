// import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Container,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getWeather } from "./api";
import GetWeather from "./getWeather";
import background from "./assets/Group2.png";

const App = () => {
  const [value, setValue] = useState("");
  const [val, setVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      getWeather(value).then((data) => {
        setVal(data.data);
        console.log(data);
      });
      setValue("");
    }
  };
  useEffect(() => {
    getWeather(value || "london").then((data) => {
      setVal(data.data);
    });
  }, []);
  return (
    <Box sx={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" , backgroundColor:'#0f1d2e' }}>
      <Container fixed>
        <Grid
          container
          spacing={2}
          height={"100vh"}
          sx={{ margin: "auto" }}
          justifyContent={"space-between"}
        >
          <Grid item xs={12} md={6} marginTop={{ xs: "2vh", md: "45vh" }}>
            <form onSubmit={handleSubmit}>
              <input
                className="input__text"
                type="text"
                name="city"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button type="submit" className="btn__search">
                Search
              </button>
            </form>
          </Grid>
          <Grid item xs={12} md={6} marginTop={{ xs: "-23vh", md: "20vh" }} padding='0'>
            <GetWeather value={val} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
