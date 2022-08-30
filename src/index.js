import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componentsnew/App';
import Appdullah from './emrenincompolari/Appdullah';
import ProplardaInecekVar from './emrenincompolari/ProplardaInecekVar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<App />
<Appdullah />
<ProplardaInecekVar susluDegisken="süslü değişken" />
</>
);


 