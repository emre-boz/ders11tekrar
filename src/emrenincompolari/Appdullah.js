import Babasayfa from "./Babasayfa";
import { useState } from "react";
import "./Tasarim.css";


function Appdullah(){

    const[onlineMi, onlineMiGuncelle]=useState(window.navigator.onLine);

console.log("onlineMi",onlineMi);

window.addEventListener("online", ()=>
{    console.log("babasayfa online");
    onlineMiGuncelle(true);}
)

window.addEventListener("offline", ()=>
{    console.log("babasayfa offline");
    onlineMiGuncelle(false);}
)

    return (
        <>
        
        <h1 
        className={onlineMi?"akiyor":"akmiyor"}>
            {onlineMi===true?"bağlantı akıyor":"bağlantı yok"}
            </h1>
        {onlineMi&&<Babasayfa />}
        </>
    )
}

export default Appdullah;