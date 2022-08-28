import {useState} from "react";

function C1(ozellikler){

    console.log("C1 tekrar çalıştı");

    const [meyve2,meyveyiGuncelle]=useState("Armut");

    // meyveyiGuncelle("Portakal");//çıplak olmaz rerender sorunu
    const meyve="Elma"; 

    return <div>Ben C1 {JSON.stringify(ozellikler.isim[0])}
    bu günün meyvesi {meyve}
    <p>useState meyvesi {meyve2}</p>
    <div>
        <button onClick={()=>{meyveyiGuncelle("Portakal")}}>Meyveyi güncelle</button>
    </div>
    </div>
    
}

export default C1;