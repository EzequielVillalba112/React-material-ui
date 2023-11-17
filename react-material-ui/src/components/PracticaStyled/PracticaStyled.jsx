import styled from "@emotion/styled";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import Libro4 from "../../assets/libro4.png";

export default function PracticaStyled() {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <Container>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          overflow: "hidden",
          mt: 3,
        }}
      >
        <Img src={Libro4} />
        <Box sx={{ flexGrow: 1, display: "grid", gap: 2 }}>
          <Typography variant="h4" component="h2">
            Against all odds
          </Typography>
          <Typography variant="body1" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            optio quod? Nisi, sunt rem maiores explicabo ad esse beatae rerum!
            Voluptatum quod sit maxime et debitis, repellat ea distinctio
            officiis!
          </Typography>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ mt: 2 }}
          >
            Add Card
          </Button>
        </Box>
        <Box sx={{ mr: 2 }} component="p">
          $15.000
        </Box>
      </Paper>
    </Container>
  );
}
