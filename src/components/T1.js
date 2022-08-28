import { useState } from "react";

function T1(){
    const [hayvan,hayvanGuncelle]=useState("kaplan");
    return <div>
        <p>Hayvanımız:{hayvan}</p>
        <div>
            <button onClick={()=>{hayvanGuncelle("kestenkele")}}>Hayvan Değiştiren Buton Gibi Buton</button>
        </div>
    </div>
}

export default T1;