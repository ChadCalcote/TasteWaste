import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 500,
  },
});

const restaurant = {
  address: "1224 S Congress Ave",
  city: "Austin",
  description:
    "Joann’s Fine Foods is a South Congress neighborhood spot, a new take on the American diner, and a vacation for locals and tourists alike. Open early and late at the Austin Motel, Joann’s is a welcome respite for early birds and night owls, outlaws and in-laws, all ways always.",
  id: 1,
  lat: "-97.7490700000",
  long: "30.2518270000",
  name: "Joann's Fine Foods",
  photo:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPbs93YKsB4YQpGis0wY4adNYc8FhdwFXvg&usqp=CAU",
  state: "TX",
  zip_code: "78704",
};


export default function RestaurantCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={restaurant.photo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}