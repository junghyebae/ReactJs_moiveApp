import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*

1, 컴포넌트는 각기 다른 functions과 methods 를 갖고 있다.
2. !! 모든 컴포넌트는 render function을 갖고 있다. !!
   --render 기능은 뭔가를 보여주는 , 출력하는 기능이다.
   '이 컴포넌트가 나에게 보여주는 것이 무엇인가?' 이게 render 기능이다.
   예를 들면, yarn start를 실행한다면(C:\Users\user\WebstormProjects\moive-app>yarn start) js의 모든 코드를 가져와서 html 파일에 담아, 우리가 지금 열고 있는 이 파일이야.
   그 파일을 public 폴더에서 찾을 수 있다. 이게 CRA 로 만들어진 파일이다. (CRA = CREATE REACT APP)
*/


class App extends Component {
  render() {
    return (
      <div className="App"> hello

      </div>
  );
  }
}

export default App;
