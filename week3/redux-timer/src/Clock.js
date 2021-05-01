import React from 'react';

function Clock({time, lap}) {
    return (
        <div>
            <h1>Redux-React StopWatch</h1><br />
         <span>{(time.h >=10)? time.h : "0"+time.h}</span>:
         <span>{(time.m >=10)? time.m : "0"+time.m}</span>:
         <span>{(time.s >=10)? time.s : "0"+time.s}</span>:
         <span>{(time.ms >=10)? time.ms : "0"+time.ms}</span>
         
        </div>
      );
    }
 export default Clock;
