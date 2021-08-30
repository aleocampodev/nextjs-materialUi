import useStylesMain from "./MainStyle";
import {
  Tabs,
  Tab,
  Typography,
  Button,
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";
import { useState } from "react";

const index = ({ properties, apartments }) => {
  const classes = useStylesMain();

  const [tabCard, setTabCard] = useState(1);

  const setChangeTab = (e) => {
    setTabCard(e.target.value);
  };

  return (
    <div>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid>
            <Tabs value={tabCard} onChange={setChangeTab}>
              {properties.map((item) => (
                <Tab key={item.id} label={item.slug}></Tab>
              ))}
            </Tabs>
          </Grid>
          <Grid container spacing={4}>
            {apartments.map((apartment) => (
              <Grid item key={apartment.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={apartment.image}
                    title={apartment.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {apartment.title}
                    </Typography>
                    <Typography>${apartment.price}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default index;
