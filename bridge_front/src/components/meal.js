import { React, useState, useEffect, useRef } from 'react';
import MealList from './meal_list';
import styles from './style/meal.module.css';
import ProgressBar from "react-animated-progress-bar";
import Calendar from "react-calendar";
import './style/calendar.css'
import moment from 'moment';
import 'moment/locale/ko';
import styled from 'styled-components';

// 각 부분 구분하는 가로 줄
const StyledHr = styled.hr`
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
`;

const Meal = (props) => {
    //Progress bar 퍼센트 state
    const [percent, setPercent] = useState(0);
    //캘린더에서 선택한 날짜를 담는 state
    const [currentDate, setCurrentDate] = useState();
    //캘린더에서 선택한 날짜의 목표 칼로리 기본값 1-> Divide by 0 오류 피하기 위해 1로 기본
    const [targetCal, setTargetCal] = useState(1);

    //캘린더에서 클릭을 하면 (Focus on change)
    const calendarOnChange = (e) => {
        setCurrentDate(moment(e).format("YYYY-MM-DD"))
    };

    // //해더 버튼이 바라보는 Ref
    // const todayRef = useRef();
    // const monthlyRef = useRef();
    
    // //헤더 버튼 onClick handler
    // const onTodayClick = () => {
    //     todayRef.current?.scrollIntoView({ behavior: 'smooth' });
    // };
    // const onMonthlyClick = () => {
    //     monthlyRef.current?.scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        //전체 Warpper
        <div className={styles.meal_flexer}>
            {/** Meal Header 사진 div*/}
            <div className={styles.meal_header}>
                <p id={styles.header_text}>Meal</p>
                {/* <div id={styles.header_ref_buttons}>
                    <button id={styles.header_today_ref_btn} onClick={onTodayClick}>오늘 식단</button>
                    <button id={styles.header_monthly_ref_btn} onClick={onMonthlyClick}>이번달 식단 계획</button>
                </div> */}
            </div>

            <h2>오늘 얼마나 먹었나요?</h2>
            <StyledHr />
            {/** Meal 오늘의 식단 정보 div*/}
            <div className={styles.today_info}>
                
                <div id={styles.progress_bar}>
                    <ProgressBar
                        width="700px"
                        height="14px"
                        fontColor="white"
                        trackWidth="10"
                        percentage={percent}
                        trackPathColor="grey"
                        trackBorderColor="black"
                        hollowBackgroundColor="#333333"
                        defColor={{
                            fair: "orangered",
                            good: "yellow",
                            excellent: "green",
                            poor: "red",
                        }}/>
                </div>
                <div id={styles.today_meals}>
                    <MealList sender_display = {'none'}/>
                </div>
            </div>
            
            <h2>이번달 식단 진행한 내용이에요</h2>
            <StyledHr />
            {/** 캘린더와 식단 리스트 블럭의 가로 배치를 위한 플랙서*/}
            <div className={styles.calendar_flexer}>
                {/** 캘린더 div  */}
                <div className={styles.meal_calendar}>
                    <Calendar onChange={calendarOnChange}/>
                </div>
                {/** 식단 list div */}
                <div className={styles.meal_list}>
                    <div className={styles.meal_list_target_cal}>
                        <h4>목표 칼로리는</h4>
                        <input className={styles.target_cal_receiver} value={targetCal}/>
                        <h4>Kcal 입니다.</h4>
                        <button className={styles.target_cal_sender}>전송</button>
                    </div>
                    <MealList sender_display = {'block'}/>
                </div>
            </div>

        </div>
    );
}

export default Meal;