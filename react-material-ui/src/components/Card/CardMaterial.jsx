import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Foto2 from "../../assets/foto-2.jpg";

export default function CardMaterial() {
  return (
    <Container sx={{ mt: 5}}>
      <Grid container spacing={1}>
        <Grid md={4} >
          <Card sx={{ bgcolor: "#000", color: "#d3d3d3", maxWidth: "350px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={Foto2}
                height="200"
                sx={{ objectFit: "cover" }}
              />

              <CardContent>
                <Typography variant="h4">Card Title</Typography>
                <Typography variant="body2" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  magnam, nisi doloremque tempora numquam voluptates adipisci
                  voluptatum alias quis suscipit, architecto, debitis ducimus?
                  Sapiente dolorem facere earum explicabo? Nemo, saepe.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Button variant="contained" color="success">
                Add
              </Button>
              <Button color="error">Remove</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid md={4}>
          <Card sx={{ bgcolor: "#000", color: "#d3d3d3", maxWidth: "350px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={Foto2}
                height="200"
                sx={{ objectFit: "cover" }}
              />

              <CardContent>
                <Typography variant="h4">Card Title</Typography>
                <Typography variant="body2" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  magnam, nisi doloremque tempora numquam voluptates adipisci
                  voluptatum alias quis suscipit, architecto, debitis ducimus?
                  Sapiente dolorem facere earum explicabo? Nemo, saepe.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Button variant="contained" color="success">
                Add
              </Button>
              <Button color="error">Remove</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid md={4}>
          <Card sx={{ bgcolor: "#000", color: "#d3d3d3", maxWidth: "350px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={Foto2}
                height="200"
                sx={{ objectFit: "cover" }}
              />

              <CardContent>
                <Typography variant="h4">Card Title</Typography>
                <Typography variant="body2" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  magnam, nisi doloremque tempora numquam voluptates adipisci
                  voluptatum alias quis suscipit, architecto, debitis ducimus?
                  Sapiente dolorem facere earum explicabo? Nemo, saepe.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Button variant="contained" color="success">
                Add
              </Button>
              <Button color="error">Remove</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid md={4}>
          <Card sx={{ bgcolor: "#000", color: "#d3d3d3", maxWidth: "350px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={Foto2}
                height="200"
                sx={{ objectFit: "cover" }}
              />

              <CardContent>
                <Typography variant="h4">Card Title</Typography>
                <Typography variant="body2" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  magnam, nisi doloremque tempora numquam voluptates adipisci
                  voluptatum alias quis suscipit, architecto, debitis ducimus?
                  Sapiente dolorem facere earum explicabo? Nemo, saepe.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Button variant="contained" color="success">
                Add
              </Button>
              <Button color="error">Remove</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid md={4}>
          <Card sx={{ bgcolor: "#000", color: "#d3d3d3", maxWidth: "350px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={Foto2}
                height="200"
                sx={{ objectFit: "cover" }}
              />

              <CardContent>
                <Typography variant="h4">Card Title</Typography>
                <Typography variant="body2" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  magnam, nisi doloremque tempora numquam voluptates adipisci
                  voluptatum alias quis suscipit, architecto, debitis ducimus?
                  Sapiente dolorem facere earum explicabo? Nemo, saepe.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Button variant="contained" color="success">
                Add
              </Button>
              <Button color="error">Remove</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
