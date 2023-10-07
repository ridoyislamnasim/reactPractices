import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const element =(
//   <h1 className='heading'  tabIndex={index}>
//     <span className='text'>Asslamualikum Ridoy</span>
//     <img sec='' />
//   </h1>
// )
// element = {
//   type :'h1',
//   props:{
//     className:'heading',
//     tabIndex : 0,
//     children:{
//       {
//         type:'span',
//         props:{
//           className:'text'
//         }
//       },
//       {
//         type:'img',
//         props:{
//           src:''
//         }
//       }
//     }
//   }
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
