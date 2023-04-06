import React from "react";
import "./style/home.css";
import { Navbar } from "react-bootstrap";
import OffcanvasExample from "./navbar";
import Footer from "./footer";

function Home(){
    return(
        <div className="home">
          <OffcanvasExample/>
          <div className="header_div"></div>
          <div className="introduce"></div>
          <div className="exercise_itr">
            <p>기능</p>
            <h1> EXERCISE </h1>
            <p>운동 리스트를 작성하고 얼마나 꾸준히 운동을 하며 자기 관리하고 있는지 확인해 보세요</p>
          </div>
          <div className="meal_itr">
            <p>기능</p>
            <h1> MEAL </h1>
            <p>목표 칼로리를 정하고 아침, 점심, 저녁의 칼로리를 기록하여 자신의 식단을 관리해보세요</p>
          </div>
          <Footer/>
        </div>
        

      
    );
}

export default Home;