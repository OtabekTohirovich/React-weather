import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

const GetWeather = ({ value }) => {
  console.log(value?.weather?.[0]?.description);
  // console.log(value?.main?.temp);
  const { name, coord } = value;
  const renderSwitch = value => {
    switch (value) {
      case "01":
        return "☀️";
      case "02":
        return "🌤️";
      case "03":
        return "☁️";
      case "04":
        return "☁️";
      case "09":
        return "🌧️";
      case "10":
        return "🌦️";
      case "11":
        return "🌩️";
      case "13":
        return "❄️";
      case "50":
        return "🌫️";
      default:
        return "☁️";
    }
  };
  // const {feels_like, humidity, pressure, temp, temp_max, temp_min}= value?.main

  
  return (
    <Stack>
      <Card>
        <CardContent>
          
          {renderSwitch(value?.weather?.[0]?.icon.slice(0, 2))}
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {name}
          </Typography>
          <Typography
            variant="h5"
            sx={{ textTransform: "capitalize" }}
            component="div"
          >
            {value?.weather?.[0]?.description}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Feels_like: {value?.main?.feels_like}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Humidity: {value?.main?.humidity}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Temp: {value?.main?.temp}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Temp_max: {value?.main?.temp_max}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Temp_min: {value?.main?.temp_min}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Stack>
  );
};

export default GetWeather;
