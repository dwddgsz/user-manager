import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
:root {
    --white: #fff;
    --dark: #37414C;
    --bg: #FAFAFA; 
    --grey: #c8c8c8;
}
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}
html,body {
  height:100%;
}
html {
  font-size:62.5%;
  font-family: 'Inter', sans-serif;
}
a {
  text-decoration:none;
}
li {
  list-style:none;
}
a:focus,input:focus,button:focus {
  outline:none;
}
button,input {
  font-family: 'Inter', sans-serif;
}
img {
    display:block;
}
`


ReactDOM.render(
    <>
    <GlobalStyle/>
    <App/>
    </>,document.getElementById('root')
)