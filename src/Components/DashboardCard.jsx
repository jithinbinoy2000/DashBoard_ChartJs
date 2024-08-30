import Chart from "./Chart"
import DataTable from "./DataTable"
import PieChart from "./PieChart"
import '../Style/dashboardcard.css'
//import React from 'react'
Chart
function DashboardCard() {
  return (
    <div  className="body-container">
    <div className="chart-container" >
    <Chart/>
    <div>
    <PieChart/>
    </div>
      </div> 

   <div className="table_container"><DataTable/></div>  
     
    </div>
  )
}

export default DashboardCard