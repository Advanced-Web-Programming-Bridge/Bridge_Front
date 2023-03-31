import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

//버튼 눌림 야부 false: 안눌림, true눌림
let breakfast_v = false;
let lunch_v = false;
let dinner_v = false;

//아침, 점심, 저녁  스타일 버튼
const StyledMealList = styled.button`
    color: white;
    border-radius: 8px;
    padding: 4px 8px;
    font-size: 12pt;
    background-color: ${(props) => props.color};
    border-style: ${(props) => props.border};
`
//버튼 아래에 위치하는 div(실제 숫자를 적는 부분)
const StyledMealItem = styled.div`
    display: ${(props) => props.display}
`
//전체 Warpper
const StyledWrapper = styled.div`
    width: 100%;
    height: fit-content;
    align-content: start;
`
//실제 숫자 입력을 받는 input
const StyledInput = styled.input`

`

//누르면 서버로 데이터 전송
const StyledSender = styled.button`

`

//Component
const MealList = (props) =>{
    //
    const [breakfast, setBreakfast] = useState('none');
    const [lunch, setLunch] = useState('none');
    const [dinner, setDinner] = useState('none');

    const [breakfastBtnBorder, setBreakfastBtnBorder] = useState('ridge');
    const [lunchBtnBorder, setLunchBtnBorder] = useState('ridge');
    const [dinnerBtnBorder, setDinnerBtnBorder] = useState('ridge');

    const handleBreakfastClick = () => {
        if(!breakfast_v){
            setBreakfast('block');
            breakfast_v = true;
            setBreakfastBtnBorder('inset')
        }
        else{
            setBreakfast('none');
            breakfast_v = false;
            setBreakfastBtnBorder('ridge')
        }
    };

    const handleLunchClick = () => {
        if(!lunch_v){
            setLunch('block')
            lunch_v = true;
            setLunchBtnBorder('inset')
        }
        else{
            setLunch('none')
            lunch_v = false;
            setLunchBtnBorder('ridge')
        }
    }

    const handleDinnerClick = () => {
        if(!dinner_v){
            setDinner('block')
            dinner_v = true;
            setDinnerBtnBorder('inset')
        }
        else{
            setDinner('none')
            dinner_v = false;
            setDinnerBtnBorder('ridge')
        }
    }

    return(
        <StyledWrapper>
            <StyledMealList color='green' onClick={handleBreakfastClick}>
                아침
            </StyledMealList>
            <StyledMealItem id='breakfast' display={breakfast}>
                <StyledInput type='text' border={breakfastBtnBorder} value={props.breafastValue}/>
            </StyledMealItem>

            <StyledMealList color='orange' onClick={handleLunchClick}>
                점심
            </StyledMealList>
            <StyledMealItem id='lunch' display={lunch}>
                <StyledInput type='text' border={lunchBtnBorder} value={props.lunchValue}/>
            </StyledMealItem>

            <StyledMealList color='red' onClick={handleDinnerClick}>
                저녁
            </StyledMealList>
            <StyledMealItem id='dinner' display={dinner}>
                <StyledInput type='text' border={dinnerBtnBorder} value={props.dinnerValue}/>
            </StyledMealItem>

            <StyledSender>
                전송
            </StyledSender>
        </StyledWrapper>
    );
};

export default MealList
