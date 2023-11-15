import Header from "../Header/Header";
import {Typography,Container} from "@mui/material"

export default function TypographyMaterial() {
  return (
    <Container maxWidth="md xs" sx={{pb:2, border: 2, mt:1}} fixed >
      <Typography variant="h1" component="h1" textAlign="center">Typography material Ui</Typography>
      <Typography variant="h5" component="a" href="https://mui.com/material-ui/api/typography/">Para ver todas sus props ir a este enlace</Typography>
    </Container>
  )
}
