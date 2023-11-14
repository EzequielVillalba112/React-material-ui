import {BrowserRouter as Router} from 'react-router-dom'
import Page from './components/page'
import Header from './components/Header/Header'

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
