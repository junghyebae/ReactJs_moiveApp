import React, {Component} from 'react';
import ReactDOM2 from 'react-dom';
import './index.css';
import App1 from './App';
import * as serviceWorker from './serviceWorker';


/*
우리는 index.js에 파일을 만들고 있다.
index.js 는 react, reactDOM, css, 컴포넌트'app'을 불러온다.
*/

/*ReactDOM이 render(출력)한다. 무엇을? 컴포넌트 App을
-컴포넌트 App은 App.js 를 가르킴
 그 컴포넌트를 render(출력)해야한다. 어디에? id가 root 인곳에 .
그리고 이 root 는 어디에 있었지? 바로 index.html 에 있었지.
지금 우리가 하는 것은, 한개의 컴포넌트를 render하고 있다는 것이야. 컴포넌트 이름은 app이고

*/

ReactDOM2.render(<App1 />, document.getElementById('root'));
ReactDOM2.render(<App1/> , document.getElementById('root1'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
