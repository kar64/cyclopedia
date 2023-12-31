import React from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom/client';
import {Header}from'./layout/Header';
import {Footer}from'./layout/Footer';
import {CyclOPediaFuncPage} from './components/CyclOPediaFuncPage';



const App=()=>{
    return(
        <>
        <Header/>
        <CyclOPediaFuncPage/>
        
        <Footer/>
        </>
    )
};
const root=ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />)