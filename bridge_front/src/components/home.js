import React from "react";
import "./style/home.css";
import { Navbar } from "react-bootstrap";
import OffcanvasExample from "./navbar";
import Footer from "./footer";

function Home(){
    return(
        <div className="home">
          <OffcanvasExample/>
          <div className="header_div">
            <div className="header_text1">About</div>  
            <div className="header_text2">Your health is what you make</div>
            <div className="header_text3">당신의 건강을 위한 운동과 식단 관리를 도와드립니다</div>    
          </div>
          <div className="introduce">
            <div className="intro_text1">Mission</div> 
            <div className="intro_text2">Management of your health</div>
            <div className="intro_text3">You will have a better tomorrow</div>
            <div className="intro_text4">건강을 관리하는 것은 더 좋은 내일을 만들어 줍니다</div>    
          </div>
          <div className="introduce2">
            <div className="intro1">
              <img className="intro1_img" src="./intro1.jpg"/>
              <div className="intro2_text1">운동을 기록하고 <br/>관리할 수 있도록 도와줍니다</div>
            </div>
            <div className="intro2">
              <img className="intro2_img" src="./intro2.jpg"></img>
              <div className="intro2_text2">칼로리를 기록하고 <br/>식단을 관리를 도와줍니다</div>
            </div>   
          </div>
          <div className="exercise_itr">
            <div className="exer_text1">Feature</div> 
            <div className="exer_text2">EXERCISE </div>
            <div className="exer_text3">운동 리스트를 작성하고 얼마나 꾸준히 운동을 하며 <br/> 자기 관리하고 있는지 확인해 보세요</div>
          </div>
          <div className="meal_itr">
            <div className="meal_text1">Feature</div> 
            <div className="meal_text2"> MEAL </div>
            <div className="meal_text3">목표 칼로리를 정하고 아침, 점심, 저녁의 칼로리를 기록하여 자신의 식단을 관리해보세요</div>
          </div>
          <Footer/>
        </div>
        

      
    );
}

export default Home;