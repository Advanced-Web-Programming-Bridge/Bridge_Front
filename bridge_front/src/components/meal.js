import { React } from 'react';
import styled from "styled-components"
import MealList from './meal_list';
import styles from './style/meal.module.css'
let number = Number(0)

const Meal = (props) => {
    return (
        //전체 Warpper
        <div className={styles.meal_flexer}>

            {/** Meal Header 사진 div*/}
            <div className={styles.meal_header}>
                <p id={styles.header_text}>Meal</p>
            </div>

            {/** Meal 오늘의 식단 정보 div*/}
            <div className={styles.today_info}>
                <div id={styles.progress_bar}>
                    Progressbar
                </div>
                <div id={styles.today_meals}>
                    <MealList />
                </div> 
            </div>

            {/** 캘린더와 식단 리스트 블럭의 가로 배치를 위한 플랙서*/}
            <div className={styles.calendar_flexer}>
                {/** 캘린더 div  */}
                <div className={styles.meal_calendar}>
                    Calendar
                </div>
                {/** 식단 list div */}
                <div className={styles.meal_list}>
                    <MealList />
                </div>
            </div>

        </div>
    );
}

//Progressbar 임시 구현 (수정 예정)
const Progressbar = styled.div`
    width: 60dp;
    height: 10dp;
    background-color: white;
`;

//Progressbar 진행도 임시 구현 (수정 예정)
const Delta = styled.div<{delta: number}>`
    background-color: ${(props) => props.theme.redColor};
    width: ${(props) => props.delta + "%"}
    height: 100%
`;
export default Meal;