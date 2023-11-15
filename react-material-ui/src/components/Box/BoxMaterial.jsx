import { Box, Button, Container, Typography } from "@mui/material";
import { IoConstruct } from "react-icons/io5";

export default function BoxMaterial() {
  return (
    <Container maxWidth="md xs" sx={{ pb: 2, border: 2, mt: 1 }} fixed>
      <Typography variant="h1">Box Material ui</Typography>
      <Box sx={{ border: 2, p: 2, borderColor: "peru", textAlign: "center"}} >
        contenido de box
        <Button variant="contained" sx={{ml:2}} color="error" startIcon={<IoConstruct/>}>Button Material ui</Button>
      </Box>
    </Container>
  );
}
