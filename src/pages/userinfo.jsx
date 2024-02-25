import React from "react";


const Userinfo = () => {
    
    const userData = JSON.parse(window.localStorage.getItem("userInfo"));
    const selectedCategory = JSON.parse(window.localStorage.getItem("selectedCategory"));
    console.log(userData);
    console.log(selectedCategory);

    return(
        <>
    <div className="userpage">
        <img src = "profilepic.jpg" className="snow"/>
    <p style={{marginRight:"30px"}}>{userData.name}</p>
    <p style={{marginRight:"30px"}}>{userData.username}</p>
    <p style={{marginRight:"30px"}}>{userData.email}</p>
    <div className="genre">
    {selectedCategory.map( (item) => (
               <button type = "submit" className="button1" key = {item}>{item}</button>
            )) }
            </div>
    </div>
    </>
    );
}

export default Userinfo;
