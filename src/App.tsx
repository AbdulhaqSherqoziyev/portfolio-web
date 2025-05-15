import './assets/css/App.css'
import Footer from './assets/pages/Footer'
import Navbar from './assets/pages/Navbar'
import Page from './assets/pages/Page'

function App() {

  return (
    <>
      <div className='app-container'>
        <Navbar />
        <Page />
      </div>
      <Footer />
    </>
  )
}

export default App
