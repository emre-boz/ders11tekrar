import { useState } from "react";
import OnlineIseBenVarimAbi from "./OnlineIseBenVarimAbi";

function JasonStatham() {
  const [merhabaCanim, merhabaCanimGuncelle] = useState("merhaba");
    const [onlineMi,onlineMiGuncelle]=useState(window.navigator.onLine);
  return (
    <>
      <p>bu bir jason statham compederidir</p>
      <p>bu bir merhaba canım fonksiyonudur {merhabaCanim}</p>
      <div>
        <button onClick={()=>{merhabaCanimGuncelle("CANIM")}}>canım yap</button>
      </div>
      <div>
        
        <p>{onlineMi&&<OnlineIseBenVarimAbi />}</p>
      </div>


    </>
  );
}

export default JasonStatham;
