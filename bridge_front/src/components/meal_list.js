import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

//버튼 눌림 야부 false: 안눌림, true눌림
let breakfast_v = false;
let lunch_v = false;
let dinner_v = false;

//아침, 점심, 저녁  스타일 버튼
const StyledMealList = styled.div`
    color: white;
    width:100%;
    height: fit-content;
    border:none;
    border-radius: 1px;
    margin-bottom: 1rem;
    align-text: start;
    background-color: ${(props) => props.color};
    font-family: Pretended;
    cursor: pointer;
    opacity: 0.6;
    >p{
        font-size: 16pt;
    }
    :hover{
        opacity: 1;
    };
`
//버튼 아래에 위치하는 div(실제 숫자를 적는 부분)
const StyledMealItem = styled.div`
    display: ${(props) => props.display}
`
//~에 ~만큼 먹었어요를 감싸는 Wrapper
const MealItemFlexer = styled.div`
    display:flex;
    justfy-content: space-between;
    align-items: center;
`
//전체 Warpper
const StyledWrapper = styled.div`
    width: 100%;
    margin-top: 3vh;
    height: fit-content;
    align-content: start;
    overflow-x: hidden;
`
//실제 숫자 입력을 받는 input
const StyledInput = styled.input`
    margin-bottom: 1rem;
    margin-right: 1rem;
    margin-left: 1rem;
    height: 2rem;
    border: none;
    background-color: #e6e6fa;
    font-size: 13pt;
    font-family: Pretended;
`

//누르면 서버로 데이터 전송
const StyledSender = styled.button`
    width: 8vw;
    height: 5vh;
    margin-top: 2vh;
    border: none;
    border-radius: 8px;
    background-color: skyblue;
    opacity: 0.6;
    font-family: Pretended;
    cursor: pointer;
    
    display: ${(props) => props.sender_display};
    :hover{
        opacity: 1;
    };
`

//Component
const MealList = (props) => {
    //아침, 점심, 저녁 버튼 아래에 있는 div display 상태
    const [breakfast, setBreakfast] = useState('block');
    const [lunch, setLunch] = useState('block');
    const [dinner, setDinner] = useState('block');

    //아침, 점심, 저녁에 먹은 칼로리를 입력 받게 되는 State
    const [breakfastValue, setBreakfastValue] = useState(0)
    const [lunchValue, setLunchValue] = useState(0)
    const [dinnerValue, setDinnerValue] = useState(0)

    //아침 버튼을 클릭하면 나오고 사라지고
    const handleBreakfastClick = () => {
        if (!breakfast_v) {
            setBreakfast('none');
            breakfast_v = true;
        }
        else {
            setBreakfast('block');
            breakfast_v = false;
        }
    };

    //점심 버튼을 클릭하면 나오고 사라지고
    const handleLunchClick = () => {
        if (!lunch_v) {
            setLunch('none')
            lunch_v = true;
        }
        else {
            setLunch('block')
            lunch_v = false;
        }
    }

    //저녁 버튼을 클릭하면 나오고 사라지고
    const handleDinnerClick = () => {
        if (!dinner_v) {
            setDinner('none')
            dinner_v = true;
        }
        else {
            setDinner('block')
            dinner_v = false;
        }
    }

    //데이터 서버 전송
    const dataSender = () => {

    }

    return (
        <StyledWrapper>
            <StyledMealList color='green' onClick={handleBreakfastClick}>
                <p>아침</p>
            </StyledMealList>
            <StyledMealItem id='breakfast' display={breakfast}>
                <MealItemFlexer>
                    <p>아침에</p>
                    <StyledInput type='text' value={breakfastValue} />
                    <p>Kcal를 먹었어요</p>
                </MealItemFlexer>

            </StyledMealItem>

            <StyledMealList color='orange' onClick={handleLunchClick}>
                <p>점심</p>
            </StyledMealList>
            <StyledMealItem id='lunch' display={lunch}>
                <MealItemFlexer>
                    <p>점심에</p>
                    <StyledInput type='text' value={lunchValue} />
                    <p>Kcal를 먹었어요</p>
                </MealItemFlexer>
            </StyledMealItem>

            <StyledMealList color='red' onClick={handleDinnerClick}>
                <p>저녁</p>
            </StyledMealList>
            <StyledMealItem id='dinner' display={dinner}>
                <MealItemFlexer>
                    <p>저녁에</p>
                    <StyledInput type='text' value={dinnerValue} />
                    <p>Kcal를 먹었어요</p>
                </MealItemFlexer>
            </StyledMealItem>

            <StyledSender onClick={dataSender} sender_display={props.sender_display}>
                전송
            </StyledSender>
        </StyledWrapper> 
    );
};

export default MealList
