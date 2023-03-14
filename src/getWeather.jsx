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
  // const {feels_like, humidity, pressure, temp, temp_max, temp_min}= value?.main
  return (
    <Stack>
      <Card>
        <CardContent>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            cdcd
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Stack>
  );
};

export default GetWeather;
