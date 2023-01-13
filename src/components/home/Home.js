import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import Popup from './Popup';
import {useState} from 'react';
import './Home.css';
import WrongPasswordPopup from './WrongPasswordPopup';
import UploadFailedPopup from './UploadFailedPopup';
import UploadOkPopup from './UploadOkPopup';
//import {upload, authenticate, download} from "./UploadAndDownloadFunctions";

export default function Home() {

   const [authenticated, setAuthenticated] = useState(false);
   const [uploadFailed, setUploadFailed] = useState(false);
   const [uploadOk, setUploadOk] = useState(false);

   function timeout(delay) {
      return new Promise( res => setTimeout(res, delay) );
   }

   async function upload(e) {
      if (authenticated === true) {
         // console.log(e);
         const url = "https://iwjohuj9gh.execute-api.us-east-1.amazonaws.com/sample/uploadFunction";
         fetch(url, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({ key: "curriculum_vinicius.pdf" }),
         })
            .then((res) => res.json())
            .then((res) => {
               // console.log(res);
               fetch(res.URL, {
                  method: "PUT",
                  mode: "cors",
                  body: e.target.files[0],
               })
                  .then((res) => console.log(res))
                  .catch((err) => console.log(err));
            })
               .catch((err) => console.log(err));

         //setAuthenticated(false);
         await timeout(3000);
         console.log("Upload finalizado")
         setUploadOk(true);
      } else {
         console.log("Insira a senha correta para fazer upload");
         setUploadFailed(true);
      };

      await timeout(3000);
      window.location.reload(false);
      
      
   }

   function authenticate(password) {
      
      const url = "https://iwjohuj9gh.execute-api.us-east-1.amazonaws.com/sample/passwordFunction";
      fetch(url, {
         method: "POST",
         mode: "cors",
         body: JSON.stringify({ key: password.target.value }),
      })
         .then((res) => res.json())
         .then((res) => {
            console.log(res);
         if (res.ok === "Senha Correta!") {
            setAuthenticated(true);
         } else {
            setAuthenticated(false);
         }
         })
      .catch((err) => console.log(err));
      
   }

   async function download() {
         const url = "https://iwjohuj9gh.execute-api.us-east-1.amazonaws.com/sample/downloadFunction";
         fetch(url, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({ key: "curriculum_vinicius.pdf" }),
         })
            .then((res) => res.json())
            .then((res) => {
               window.open(res.URL, "_blank")
            })
               .catch((err) => console.log(err));

         await timeout(3000);
         console.log("Download finalizado");
   }


   const [buttonPopup, setButtonPopup] = useState(false);

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>

         <Box className={classNames(Style.avatar, Style.shadowed)} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I'm <span style={{background: info.gradient2, webkitBackgroundClip: 'text', webkitTextFillColor: 'transparent'}}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map(bio => (
                  <EmojiBullet emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               {info.socials.map(social => (
                  <SocialIcon link={social.link} icon={social.icon} />
               ))}

               <center style={{position: 'relative', top: -150, left: 100}}>

                  <Box border={'2px solid black'} borderRadius={'25px'} padding={'-10px'} style={{background: info.gradient}}>

                     <div style={{position: 'center'}}>
                        
                        <button className='upload-btn' onClick={() => setButtonPopup(true)} style={{backgroundColor: 'transparent', border: 'transparent'}}>
                           Upload my Curriculum
                        </button>
                     </div>

                  </Box>
                  
                  <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                     <Box border={'2px solid black'} borderRadius={'25px'} style={{background: info.gradient}}>

                        <div>
                           <h1 style={{fontSize: 20, padding: 10, color: 'white'}}>Insert the password to upload curriculum</h1>
                           <input type="password" onChange={authenticate} />
                        </div>

                        <WrongPasswordPopup trigger={!authenticated} setTrigger={setAuthenticated}>

                        </WrongPasswordPopup>


                        <div style={{position: 'relative', top: -10}}>
                           <input type="file" onChange={upload} />
                        </div>

                        <UploadFailedPopup trigger={uploadFailed} setTrigger={setUploadFailed}>

                        </UploadFailedPopup>

                        <UploadOkPopup trigger={uploadOk} setTrigger={setUploadOk}>

                        </UploadOkPopup>

                     </Box>
                  </Popup>

                  
                  <br></br>
                  <Box border={'2px solid black'} borderRadius={'25px'} padding={'-10px'} style={{background: info.gradient}}>

                     <div style={{position: 'center'}}>
                        <button className='download-btn' size="md" onClick={download}  style={{backgroundColor: 'transparent', border: 'transparent'}}>
                           Download Curriculum
                        </button>
                     </div>
                     
                  </Box>
                  
               </center>
            </Box>
         </Box>
      </Box>
   )
}