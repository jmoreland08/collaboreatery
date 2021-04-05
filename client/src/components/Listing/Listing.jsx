import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});

export const Listing = (props) => {
  const { listing } = props;
  const classes = useStyles();

  return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="listing"
              height="140"
              image={listing.image_url}
              title="collaboreatery"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2"></Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {listing.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
  );
};
