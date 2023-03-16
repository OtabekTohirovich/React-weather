import {
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
// import background from "./assets/pngwing.com.png";
const GetWeather = ({ value }) => {
  // console.log(value?.weather?.[0]?.description);
  // console.log(value?.main?.temp);
  const { name } = value;
  const renderSwitch = (value) => {
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
      <Card className="border__clas bgs" sx={{borderRadius: '30px' }}>
        <CardContent>
          <Typography fontSize={{xs: '80px', md: '150px'}}>
            {renderSwitch(value?.weather?.[0]?.icon.slice(0, 2))}
          </Typography>

          <Typography sx={{ fontSize: {xs: 12, md: 18} }} fontWeight={'bold'} color="#12425d" gutterBottom>
            {name}
          </Typography>
          <Typography
            variant="h5"
            sx={{ textTransform: "capitalize", fontSize: {xs: 18, md: 28} }}
            component="div"
            fontWeight={'bold'}
            color={'#12425d'}
          >
            {value?.weather?.[0]?.description}
          </Typography>
          <Typography sx={{ mb: 1.5 , fontSize: {xs: 12, md: 18}}} color="#12425d">
            Feels_like: {value?.main?.feels_like}
          </Typography>
          <Typography sx={{ mb: 1.5 , fontSize: {xs: 12, md: 18}}} color="#12425d">
            Humidity: {value?.main?.humidity}
          </Typography>
          <Typography sx={{ mb: 1.5 , fontSize: {xs: 12, md: 18}}} color="#12425d">
            Temp: {value?.main?.temp}
          </Typography>
          <Typography sx={{ mb: 1.5 , fontSize: {xs: 12, md: 18}}} color="#12425d">
            Temp_max: {value?.main?.temp_max}
          </Typography>
          <Typography sx={{ mb: 1.5 , fontSize: {xs: 12, md: 18}}} color="#12425d">
            Temp_min: {value?.main?.temp_min}
          </Typography>
          <Typography fontWeight={'bold'} color={'#12425d'} sx={{fontSize: {xs: 12, md: 18}}}>
            Wind speed: {value?.wind?.speed}
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
