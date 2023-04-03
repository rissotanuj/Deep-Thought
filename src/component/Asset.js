import React from 'react'
import { Assetcontainer } from './Assetcontainer'
// import { useEffect } from 'react'


const Asset = (props) => {

  // useEffect(() => {
    
  //     window.onload = ()=>{
    
  //       var btn =  document.querySelectorAll(".collapsable");
  //               console.log("This is btn", btn);
           
  //         for(let i= 0 ;i<btn.length;i++){
    
  //           btn[i].addEventListener("click", function () {
  //           // this.classList.toggle("active");
  //           var content = document.querySelectorAll(".descriptiontoggle");
  //           console.log("THis is content",content);
  //           if(content[i].style.display === "block") {
  //               content[i].style.display = "none";
  //           } else {
  //               content[i].style.display = "block";
  //           }
  //         })
  //       }
    
  //   }
    
  // }, [])
  
  // window.addEventListener('load', ()=>{
  //   alert("Hello");
  //   var btn =  document.querySelectorAll(".collapsable");
  //           console.log("This is btn", btn);
       
  //     for(let i= 0 ;i<btn.length;i++){

  //       btn[i].addEventListener("click", function () {
  //       // this.classList.toggle("active");
  //       var content = document.querySelectorAll(".descriptiontoggle");
  //       console.log("THis is content",content);
  //       if(content[i].style.display === "block") {
  //           content[i].style.display = "none";
  //       } else {
  //           content[i].style.display = "block";
  //       }
  //     })
  //   }
  // })



  

  return (

    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
      {
        props.asset.map((assets)=>{
            return(<Assetcontainer  assets={assets} key = {Math.random()}/>)
        }
        )       
      }

    </div>
    </div>

  )

}

export default Asset
