import React from "react";
import Timer from './timer';
import Weather from "./weather";
import News from './news';
import Notes from './notes';
import Userinfo from './userinfo';

const Info = () => {
    return (
        <>
        <div className="timer" style={{display:'flex',flexDirection:'column',background:'lightpink',height:'100%'}}>
            <div style={{}}>
           <div style={{display:'flex',flexDirection:'row'}}>
            <Userinfo/>
            <Notes/>
            <News/> 
            </div>
            
             <div><Weather/></div>
           <div><Timer/></div>
        </div>
        </div>
    </>
    );
}
export default Info;