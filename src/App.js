import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";

// var authenticated = false;

// function timeout(delay) {
//    return new Promise( res => setTimeout(res, delay) );
// }

// async function upload(e) {
//    if (authenticated === true) {
//       // console.log(e);
//       const url = "https://iwjohuj9gh.execute-api.us-east-1.amazonaws.com/sample/uploadFunction";
//       fetch(url, {
//          method: "POST",
//          mode: "cors",
//          body: JSON.stringify({ key: "curriculum_vinicius.pdf" }),
//       })
//          .then((res) => res.json())
//          .then((res) => {
//             // console.log(res);
//             fetch(res.URL, {
//                method: "PUT",
//                mode: "cors",
//                body: e.target.files[0],
//             })
//                .then((res) => console.log(res))
//                .catch((err) => console.log(err));
//          })
//             .catch((err) => console.log(err));

//       authenticated = false;
//       await timeout(5000);
//       console.log("Upload finalizado")
//    } else {
//       console.log("Insira a senha correta para fazer upload");
//    };

//    await timeout(3000);
//    window.location.reload(false);
   
   
// }

// function authenticate(password) {
   
//    const url = "https://iwjohuj9gh.execute-api.us-east-1.amazonaws.com/sample/passwordFunction";
//    fetch(url, {
//       method: "POST",
//       mode: "cors",
//       body: JSON.stringify({ key: password.target.value }),
//    })
//       .then((res) => res.json())
//       .then((res) => {
//          console.log(res);
//       if (res.ok === "Senha Correta!") {
//          authenticated = true;
//       } else {
//          authenticated = false;
//       }
//       })
//    .catch((err) => console.log(err));
   
// }

// async function download() {
//       const url = "https://iwjohuj9gh.execute-api.us-east-1.amazonaws.com/sample/downloadFunction";
//       fetch(url, {
//          method: "POST",
//          mode: "cors",
//          body: JSON.stringify({ key: "curriculum_vinicius.pdf" }),
//       })
//          .then((res) => res.json())
//          .then((res) => {
//             // console.log(res);
//             // fetch(res.URL, {
//             //    method: "GET",
//             //    mode: "cors",
//             //    redirected: true,
//             // })
//             window.open(res.URL, "_blank")
//          })
//             .catch((err) => console.log(err));

//       await timeout(5000);
//       console.log("Download finalizado");
// }

function App() {
   
      return (
         <div>
            <BrowserRouter>
               <BaseLayout/>
            </BrowserRouter>
         </div>
      );
   
   
}


export default App;
