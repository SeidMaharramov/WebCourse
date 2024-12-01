import Header from './components/header/header'
import './App.css'
import Section from './components/section/section'
import Login from './components/login/login'

function App() {

  return (
    <div className="hamsi" >
      <Header/>
      <div className="ortahisse">
        <Section/>
        <Login/>
      </div>
      
   </div>
  )
}

export default App
