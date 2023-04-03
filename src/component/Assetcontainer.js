import React, {   useState,useEffect } from "react";


export const Assetcontainer = (props) => {

  const [isOpen, setisOpen] = useState(false);

  // useEffect(() => {

  //       var btn =  document.querySelectorAll(".collapsable");
  //             console.log("This is btn", btn);

  //            const  handleDToggle =()=>{

  //             }

  //         for( let i = 0 ;i<btn.length;i++){
  //           btn[i].addEventListener("click", function () {
  //           // this.classList.toggle("active");
  //           var content = document.querySelectorAll(".descriptiontoggle");
  //           console.log("This is content i ",content[i],i);

  //           if(content[i].style.display === "block"){
  //               content[i].style.display = "none";
  //                console.log("THis is content if ",content[i],i);
  //                return;
  //           } else {
  //               content[i].style.display = "block";
  //                 console.log("THis is content if else",content[i],i);
  //                 return;
  //           }
  //         })
  //         console.log("This loop",i);
  //         }

  // })

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen])
  
  

  return (
    <>
      <div className="col">
        <div className="card">
          <div className="top d-flex justify-center-center align-items-center ">
            <h5 className="card-title text-light mx-auto ">
              {props.assets.header}
            </h5>
            <button
              
              className="i  collapsable rounded-circle  btn btn-light text-center d-flex justify-content-center align-items-center"
              onClick={(e)=>{ setisOpen(!isOpen); }}
            >
              <i className="fa-solid fa-info font" ></i>
            </button>
          </div>
          <div className="card-body descriptiontoggle " >
        {   isOpen && <p className="card-text">{props.assets.description}</p>}
          </div>
        </div>
      </div>
    </>
  );
};
