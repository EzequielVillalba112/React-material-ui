import {Link} from 'react-router-dom'
import './header.css'

export default function Header() {
  return (
    <>
        <nav className='menu'>
            <h1>React + Materia-ui</h1>

            <ul className='items-menu'>
                <li>
                    <Link to="/container-sx">Container y the sx</Link>
                </li>
                <li>
                    <Link to="/typografy">Typography</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}
