import { useState } from "react";

function Babasayfa(){

    const [ulke,ulkeguncelle]=useState("macaristan");

    

    return (
        <>
        <h1>bu baba sayfadır</h1>
        <h2>burada useStateler kullanılacakdır dikkat ediniz</h2>
        <p>bu sadece değişken useStateti {ulke}</p>
        <div>
            <button onClick={()=>{ulkeguncelle("sırbistan")}}>ulkeyi güncelle</button>
        </div>
        </>
    )
}

export default Babasayfa;