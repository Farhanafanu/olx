import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Firebasecontext} from'./store/Context';
import Context from'./store/Context';
import firebase from './firebase/config';
ReactDOM.render(
    
    <Firebasecontext.Provider value={{firebase}}>
        <Context>
        <App />
        </Context>
        
    </Firebasecontext.Provider>
, document.getElementById('root'));
