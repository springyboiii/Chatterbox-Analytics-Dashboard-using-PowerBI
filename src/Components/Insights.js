import React from 'react'
import {Ratio,Stack,Row,Col} from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const Insights = () => {
  return (
    <div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="profile" title="Customer Service Calls">
      <iframe title="Inisghts TDM" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=7ed8e600-b760-4008-871d-728a820f23a5&autoAuth=true&ctid=aac0c564-6c5e-4b05-8dc3-408087f77f76&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>  </Tab>
  
  <Tab eventKey="home" title="Average Statistics">
  </Tab>
  </Tabs>

  
      {/* <h1>Averages</h1>
      <iframe title="Averages - Page 1" width="100%" height="612" src="https://app.powerbi.com/view?r=eyJrIjoiMmIzOTI3ODItMDI1MC00N2UwLTg1N2UtYWI4OWVmNDRkZTM5IiwidCI6ImFhYzBjNTY0LTZjNWUtNGIwNS04ZGMzLTQwODA4N2Y3N2Y3NiIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"fitToPage="true"></iframe>    
      <h1>Total</h1>

      <iframe title="total sum - Page 1" width="100%" height="612" src="https://app.powerbi.com/view?r=eyJrIjoiOWU0NjgzMGUtOGVjNy00NmZmLThiODYtOTVhZjUyODU5NjdkIiwidCI6ImFhYzBjNTY0LTZjNWUtNGIwNS04ZGMzLTQwODA4N2Y3N2Y3NiIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
       */}
      </div>
  )
}

export default Insights