import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#000',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#d3d3d3',
}));

export default function GridMaterial() {
  return (
    <Box sx={{ flexGrow: 2, mt: 2 }}>
    <Grid container spacing={2} sx={{ml:2, mr:2}} >
      <Grid xs={12} md={12}>
        <Typography variant='h3' textAlign='center'>Propiedades GRID</Typography>
      </Grid>
      <Grid xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  </Box>
  )
}