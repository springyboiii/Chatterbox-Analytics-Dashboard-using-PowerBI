import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Button } from '@mui/material';
import SendIcon from '@mui/material/Icon/';
import "../Styles/tabs.css"
const Predict = () => {
  const [ID, setID] = useState("1");
  const [AccountLength, setAccountLength] = useState("!")
  const [LocationCode, setLocationCode] = useState("1")
  const [InternationalPlan, setInternationalPlan] = useState("1")
  const [VoicdeMailPlan, setVoicdeMailPlan] = useState("1")
  const [NoOfVMMessages, setNoOfVMMessages] = useState("1")
  const [TotalDayCalls, setTotalDayCalls] = useState("1")
  const [TotalDayMins, setTotalDayMins] = useState("1")
  const [TotalDayCharge, setTotalDayCharge] = useState("1")
  const [TotalEveCharge, setTotalEveCharge] = useState("1")
  const [TotalNightCharge, setTotalNightCharge] = useState("1")
  const [TotalInternationalCharge, setTotalInternationalCharge] = useState("1")
  const [TotalInternationalMins, setTotalInternationalMins] = useState("1")
  const [TotalEveMins, setTotalEveMins] = useState("1")
  const [TotalEveCalls, setTotalEveCalls] = useState("1")
  const [TotalInternationalCalls, setTotalInternationalCalls] = useState("1")
  const [TotalNightCalls, setTotalNightCalls] = useState("1")
  const [TotalNightMins, setTotalNightMins] = useState("1")
  const [CustomerServiceCalls, setCustomerServiceCalls] = useState("1")
const [Churn, setChurn] = useState(false)

   
  
  return (
    <div>
      
      <br />
      <br />
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
          onChange={(e)=>{setID(e.target.value)}}
        />
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Account Length"
          onChange={(e)=>{setAccountLength(e.target.value)}}
        />
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Location Code"
          onChange={(e)=>{setLocationCode(e.target.value)}}
        />
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="International Plan"
          onChange={(e)=>{setInternationalPlan(e.target.value)}}
        />
       <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Voice Mail Plan"
          onChange={(e)=>{setVoicdeMailPlan(e.target.value)}}

        />
        
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="No Of VM Messages"
          onChange={(e)=>{setNoOfVMMessages(e.target.value)}}

        />
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Total Day Calls"
          onChange={(e)=>{setTotalDayCalls(e.target.value)}}

        />
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Total Day Mins"
          onChange={(e)=>{setTotalDayMins(e.target.value)}}

        />
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Total Day Charge"
          onChange={(e)=>{setTotalDayCharge(e.target.value)}}

        />
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Total Eve Calls"
          onChange={(e)=>{setTotalEveCalls(e.target.value)}}

        />
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Total Eve Mins"
          onChange={(e)=>{setTotalEveMins(e.target.value)}}

        />
        <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Total Eve Charge"
          onChange={(e)=>{setTotalEveCharge(e.target.value)}}

        />
      <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Total Night Calls"
          onChange={(e)=>{setTotalNightCalls(e.target.value)}}

        /><TextField
        required
        id="outlined-required"
        defaultValue="Required"
        label="Total Night Mins"
        onChange={(e)=>{setTotalNightMins(e.target.value)}}

      /><TextField
      required
      id="outlined-required"
      defaultValue="Required"
      label="Total Night Charge"
      onChange={(e)=>{setTotalNightCharge(e.target.value)}}

    /><TextField
    required
    id="outlined-required"
    defaultValue="Required"
    label="Total International Calls"
    onChange={(e)=>{setTotalInternationalCalls(e.target.value)}}

  /><TextField
  required
  id="outlined-required"
  defaultValue="Required"
  label="Total International Mins"
  onChange={(e)=>{setTotalInternationalMins(e.target.value)}}

/><TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Total International Charge"
          onChange={(e)=>{setTotalInternationalCharge(e.target.value)}}

        />
    <TextField
          required
          id="outlined-required"
          defaultValue="Required"
          label="Customer Service Calls"
          onChange={(e)=>{setCustomerServiceCalls(e.target.value)}}

        />
      </div>
      
    </Box>
    <br />
    <div className='predictSubmit'>
    <Button variant="contained" >
  Predict
</Button>
<br />
<br />
<div className='Text TextFalse'>
{!Churn &&<h1>Oh Sorry! Better Luck Next Time</h1>}
</div>
<div className='Text TextTrue'>
{Churn &&<h1>Yayyy! Luckily He/She is still hanging on</h1>}
</div>
{console.log(Churn)}


</div>
    </div>
  )
}

export default Predict