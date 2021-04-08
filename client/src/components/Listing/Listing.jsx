import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
    minWidth: 340,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 65,
    marginRight: 65,
    backgroundColor: "#DFE0DF",
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
          width="140"
          image={listing.image_url}
          title="collaboreatery"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"></Typography>
          <Typography variant="body3" color="textSecondary" component="h6">
            {listing.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
