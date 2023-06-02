import axios, {isCancel, AxiosError} from 'axios';
import React,{useState,useEffect} from 'react';
function CardComponent(props) {
    const {data}=props;                 
  return (
        <div className='CardComponent'>
            <img src={data.image} />
        <div className='Information'>
            <p id='Name'>{data.name}</p>
            <p id='Status'><span><span id="dot" style={{backgroundColor:data.status=="Dead"?'red':"rgb(4, 255, 0)"}}></span> {data.status}</span> - <span>{data.species}</span></p>
            <span className='SideHeading'>Origin From:</span><p>{data.origin.name}</p>
            <span className='SideHeading'>Last known location:</span><p>{data.location.name}</p>
        </div>
    </div>
  )
}

export default CardComponent