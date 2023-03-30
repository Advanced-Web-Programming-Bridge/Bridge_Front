import { React } from 'react';
import styled from 'styled-component'
import styles from './style/meal.module.css'

const Meal = () => {
    return (
        //전체 Warpper
        <div className='meal_flexer'>

            {/** Meal Header 사진 div*/}
            <div className='meal_header'>
                Meal
            </div>

            {/** Meal 오늘의 식단 정보 div*/}
            <div className='today_info'>
                <Progressbar>
                    <Delta />
                </Progressbar>
            </div>

            {/** 캘린더와 식단 리스트 블럭의 가로 배치를 위한 플랙서*/}
            <div className='calendar_flexer'>
                {/** 캘린더 div  */}
                <div className='meal_calendar'>
                    Calendar
                </div>
                {/** 식단 list div */}
                <div className='meal_list'>
                    <p>아침</p>
                    <p>점심</p>
                    <p>저녁</p>
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