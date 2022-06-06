import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import "../Styles/tabs.css"
import { useEffect } from 'react';
import Axios from 'axios';
const Predict = () => {
  // const [profileData, setProfileData] = useState({profile_name:"initial ",about_me:"initial"})
  // useEffect(() => {
    function sendData() {
      Axios.post("/sendData", {
      
      ID:ID,
      AccountLength:AccountLength,
      LocationCode:LocationCode,
      InternationalPlan:InternationalPlan,
      VoicdeMailPlan:VoicdeMailPlan,
      NoOfVMMessages:NoOfVMMessages,
      TotalDayCalls:TotalDayCalls,
      TotalDayCharge:TotalDayCharge,
      TotalDayMins:TotalDayMins,
      TotalEveCalls:TotalEveCalls,
      TotalEveCharge:TotalEveCharge,
      TotalEveMins:TotalEveMins,
      TotalInternationalCalls:TotalInternationalCalls,
      TotalInternationalCharge:TotalInternationalCharge,
      TotalInternationalMins:TotalInternationalMins,
      TotalNightCalls:TotalNightCalls,
      TotalNightMins:TotalNightMins,
      TotalNightCharge:TotalNightCharge,
      CustomerServiceCalls:CustomerServiceCalls
      
    }).then((response)=>{
      // setName(response.data[0].name);
      // setContact(response.data[0].contact_no);
      // setUsername(response.data[0].username);
      // setEmail(response.data[0].email);
      // setLocation(response.data[0].address);
      // setDescription(response.data[0].about);
      // console.log(response.data)
      setChurn((response.data))

      alert("succesful");
      
    });
      // Axios.get('http://localhost:9000/editProfile').then((response) => { console.log(response.data) });
    
    };
  // }, []);
  function getData() {
    axios({
      method: "GET",
      url:"/predict",
    })
    .then((response) => {
      console.log(response.data)
      const res =response.data
      setChurn((res.Churn))
    })}

   
  const [ID, setID] = useState(3322);
  const [AccountLength, setAccountLength] = useState(9)
  const [LocationCode, setLocationCode] = useState(445)
  const [InternationalPlan, setInternationalPlan] = useState(1)
  const [VoicdeMailPlan, setVoicdeMailPlan] = useState(0)
  const [NoOfVMMessages, setNoOfVMMessages] = useState(0)
  const [TotalDayCalls, setTotalDayCalls] = useState(112)
  const [TotalDayMins, setTotalDayMins] = useState(258.4)
  const [TotalDayCharge, setTotalDayCharge] = useState(42.89)
  const [TotalEveCharge, setTotalEveCharge] = useState(14.47)
  const [TotalNightCharge, setTotalNightCharge] = useState(7.09)
  const [TotalInternationalCharge, setTotalInternationalCharge] = useState(3.27)
  const [TotalInternationalMins, setTotalInternationalMins] = useState(12.1)
  const [TotalEveMins, setTotalEveMins] = useState(190)
  const [TotalEveCalls, setTotalEveCalls] = useState(93)
  const [TotalInternationalCalls, setTotalInternationalCalls] = useState(3)
  const [TotalNightCalls, setTotalNightCalls] = useState(105)
  const [TotalNightMins, setTotalNightMins] = useState(158.6)
  const [CustomerServiceCalls, setCustomerServiceCalls] = useState(2)
  const [Churn, setChurn] = useState(2)

   
  
  return (
    <div>
      
      <br />
      <br />
      {/* <h1>{profileData.profile_name}asdasd </h1>
      <h1>{profileData.about_me}asdasd </h1> */}

      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="ID"
          onChange={(e)=>{setID(parseInt(e.target.value))}}
        />
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Account Length"
          onChange={(e)=>{setAccountLength(parseInt(e.target.value))}}
        />
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Location Code"
          onChange={(e)=>{setLocationCode(parseFloat(e.target.value))}}
        />
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="International Plan"
          onChange={(e)=>{setInternationalPlan(parseInt(e.target.value))}}
        />
       <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Voice Mail Plan"
          onChange={(e)=>{setVoicdeMailPlan(parseInt(e.target.value))}}

        />
        
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="No Of VM Messages"
          onChange={(e)=>{setNoOfVMMessages(parseFloat(e.target.value))}}

        />
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Total Day Calls"
          onChange={(e)=>{setTotalDayCalls(parseFloat(e.target.value))}}

        />
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Total Day Mins"
          onChange={(e)=>{setTotalDayMins(parseFloat(e.target.value))}}

        />
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Total Day Charge"
          onChange={(e)=>{setTotalDayCharge(parseFloat(e.target.value))}}

        />
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Total Eve Calls"
          onChange={(e)=>{setTotalEveCalls(parseInt(e.target.value))}}

        />
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Total Eve Mins"
          onChange={(e)=>{setTotalEveMins(parseFloat(e.target.value))}}

        />
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Total Eve Charge"
          onChange={(e)=>{setTotalEveCharge(parseFloat(e.target.value))}}

        />
      <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Total Night Calls"
          onChange={(e)=>{setTotalNightCalls(parseFloat(e.target.value))}}

        /><TextField
        required
        id="outlined-required"
        defaultValue="Required"
        label="Total Night Mins"
        onChange={(e)=>{setTotalNightMins(parseFloat(e.target.value))}}

      /><TextField
      required
      id="outlined-required"
      defaultValue="Required"
      label="Total Night Charge"
      onChange={(e)=>{setTotalNightCharge(parseFloat(e.target.value))}}

    /><TextField
    required
    id="outlined-required"
    defaultValue="Required"
    label="Total International Calls"
    onChange={(e)=>{setTotalInternationalCalls(parseFloat(e.target.value))}}

  /><TextField
  required
  id="outlined-required"
  defaultValue="Required"
  label="Total International Mins"
  onChange={(e)=>{setTotalInternationalMins(parseFloat(e.target.value))}}

/><TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Total International Charge"
          onChange={(e)=>{setTotalInternationalCharge(parseFloat(e.target.value))}}

        />
    <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Customer Service Calls"
          onChange={(e)=>{setCustomerServiceCalls(parseFloat(e.target.value))}}

        />
      </div>
      
    </Box>
    <br />
    <div className='predictSubmit'>
    <Button variant="contained" onClick={sendData} >
  Predict
</Button>
<br />
<br />
<div className='Text TextFalse'>
{Churn==0 &&<h1>Oh Sorry! Better Luck Next Time</h1>}
</div>
<div className='Text TextTrue'>
{Churn ==1&&<h1>Yayyy! Luckily He/She is still hanging on</h1>}
</div>
{console.log(ID)}


</div>
    </div>
  )
}

export default Predict