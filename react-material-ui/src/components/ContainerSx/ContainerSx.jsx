import {Button, Container} from '@mui/material';
import './ContainerSx.css'

export default function ContainerSx() {
  return (
    <Container maxWidth="md" sx={{pb:2, border: 2, mt:1}} fixed>
      <h1>Container y Sx</h1>
      <h2>Props de Container Sx:</h2>
      <div className='item-container-sx'>
        <h3>disableGutters:</h3>
        <p>Si es verdadero, se elimina el relleno izquierdo y derecho.</p>
      </div>
      <div className='item-container-sx'>
        <h3>fixed:</h3>
        <p>Establezca el ancho máximo para que coincida con el ancho mínimo del punto de interrupción actual. Esto es útil si prefiere diseñar para un conjunto fijo de tamaños en lugar de intentar acomodar una ventana gráfica completamente fluida. Es fluido por defecto.</p>
      </div>

      <div className='item-container-sx'>
        <h3>maxWidth:</h3>
        <p>Determine el ancho máximo del contenedor. El ancho del contenedor crece con el tamaño de la pantalla. Establezca en falso para deshabilitar maxWidth.</p>
        <p>Esta son las medidas:</p>
        <ul>
          <li>'xs'</li>
          <li>'sm'</li>
          <li>'md</li>
          <li>'lg'</li>
          <li>'xl'</li>
          <li>false</li>
          <li>string</li>
        </ul>
      </div>

      <div className='item-container-sx'>
        <h3>sx:</h3>
        <p>Permite colocar codigo css.</p>
      </div>
    </Container>
  )
}
