import './App.css'
import DashboardCard from './Components/DashboardCard'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'

function App() {


  return (
    <>
    <Header/>
    <div className="dashboard-container">
      <Sidebar/>
      <div className="dashboard">
        <div className="dashboard-heading">DashBoard</div>
      <DashboardCard/>
      </div>
    </div>
    
  
    </>
  )
}

export default App
