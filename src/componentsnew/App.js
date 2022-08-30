import { useState } from "react";
import Anasayfa from "./Anasayfa";
import "./App.css";
import BaglantiBilgi from "./BaglantiBilgi";

function App() {
    //const baglantiVarmi=window.navigator.onLine;

    const[baglantiDurumu, baglantiDurumDegistir]=useState(window.navigator.onLine);

  window.addEventListener("offline", () => {
    console.log("bağlantı gitti");
    baglantiDurumDegistir(false);
  });

  window.addEventListener("online", () => {
    console.log("bağlantı geldi");
    baglantiDurumDegistir(true);
  });




  return (
    <>
   {/* <p className={baglantiDurumu?"olumlu-mesaj":"uyari"}>{baglantiDurumu===true?"Bağlantı var":"Bağlantı yok"}</p>  */}
   <BaglantiBilgi baglantiDurumu={baglantiDurumu}/>
    { baglantiDurumu&&<Anasayfa />}

    <p className={"uyari"}>css deneme süsülü ve tırnaklı</p>
    <p className="uyari">css deneme süssüz tırnaklı</p>
    </>
  )
}

export default App;
