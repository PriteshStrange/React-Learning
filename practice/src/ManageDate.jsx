import React from "react";

const heading = {
    color:'#fa9191',
    textTransform : 'value',
    textAlign:"center",
    fontWeight:"bold",
    textShadow:"0px 2px 4px #ffe9c5",
    margin:"70px 0",
  }

function ManageDate(){
    let curDate = new Date();
curDate  = curDate.getHours();
let gettingData = ''
const cssStyle = {}

if(curDate >= 1 && curDate<12){
    gettingData = 'Good Morning';
    cssStyle.color = 'green'
}
if(curDate >=13 && curDate<19){
  gettingData = 'Good Evening';
  cssStyle.color = 'orange'
}
if(curDate >=20 && curDate<24){
  gettingData = 'Good Night'
  cssStyle.color = 'blue'
}

 return <h1 style={heading}>Hello <span style={cssStyle}>{gettingData}</span></h1>
}

export default ManageDate;