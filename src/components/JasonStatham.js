import { useState } from "react";
import OnlineIseBenVarimAbi from "./OnlineIseBenVarimAbi";
import "./deneme1.css";

function JasonStatham() {
  const [merhabaCanim, merhabaCanimGuncelle] = useState("merhaba");
    const [onlineMi,onlineMiGuncelle]=useState(window.navigator.onLine);

window.addEventListener("online",()=>{
  console.log("onAir");
  onlineMiGuncelle(true);
})


window.addEventListener("offline",()=>{
  console.log("offAir");
  onlineMiGuncelle(false);
})



  return (
    <>
      <p>bu bir jason statham compederidir</p>
      <p>bu bir merhaba canım fonksiyonudur {merhabaCanim}</p>
      <div>
        <button onClick={()=>{merhabaCanimGuncelle("CANIM")}}>canım yap</button>
      </div>
      <div className={onlineMi===true?"online":"offline"}><h1>ON AIR</h1></div>
      
        
        {onlineMi&&<OnlineIseBenVarimAbi />}
      


    </>
  );
}

export default JasonStatham;
