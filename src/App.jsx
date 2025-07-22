import './App.css'
import AppList from './components/AppList'
import ListContext from './context/ListContext'

function App() {


  return (
    <>
    <ListContext>
      <AppList/>
    </ListContext>
    
     
    </>
  )
}

export default App
