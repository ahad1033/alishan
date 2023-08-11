import './App.css'
import Banner from './components/Banner/Banner'
import Main from './components/Main/Main'
import NavBar from './components/NabBar/NavBar'

function App() {

  return (
    <div className='mx-auto max-w-screen-xl px-5'>
     <NavBar />
     <Banner />
     <Main />
    </div>
  )
}

export default App
