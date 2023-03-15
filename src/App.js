// import logo from "./logo.svg";
import "./App.css";
import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getWeather } from "./api";
import GetWeather from "./getWeather";

const App = () => {
  const [value, setValue] = useState("");
  const [val, setVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(value).then((data) => {
      setVal(data.data);
    });
    setValue("");
  };
  useEffect(() => {
    getWeather(value || "london").then((data) => {
      setVal(data.data);
    });
  }, []);
  // const onClear = () => {
  //   setValue("");
  // };
  return (
    <Box>
      <Container fixed>
        <Grid container spacing={2} height={"100vh"} sx={{ margin: "auto" }}>
          <Grid item xs={5} marginTop={"45vh"}>
            <form onSubmit={handleSubmit}>
              <input
                className="input__text"
                type="text"
                name="city"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button type="submit" className="btn__search" >
                Search
              </button>
            </form>
          </Grid>
          <Grid item xs={5} marginTop={"20vh"}>
            <GetWeather value={val} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
