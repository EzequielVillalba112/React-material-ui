import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header/Header'
import Page from './components/page'
import Typography from './components/Typography/Typography'

function App() {
  return (
    <>
      <div className='app'>
        <Router>
          <Header/>
          <Page/>
        </Router>
      </div>
    </>
  )
}

export default App
