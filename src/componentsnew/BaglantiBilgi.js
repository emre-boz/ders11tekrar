// function BaglantiBilgi(ozellikler){
//     return    <p className={ozellikler.baglantiDurumu?"olumlu-mesaj":"uyari"}>{ozellikler.baglantiDurumu===true?"Bağlantı var":"Bağlantı yok"}</p> 
// }

// export default BaglantiBilgi;



function BaglantiBilgi({baglantiDurumu}){
    return    <p className={baglantiDurumu?"olumlu-mesaj":"uyari"}>{baglantiDurumu===true?"Bağlantı var":"Bağlantı yok"}</p> 
}

export default BaglantiBilgi;