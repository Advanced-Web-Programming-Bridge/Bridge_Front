import React, {useState} from 'react'
import styled from 'styled-components'

let breakfast_v = false;
let lunch_v = false;
let dinner_v = false;

const StyledMealList = styled.button`
    color: white;
    border-radius: 8px;
    padding = 4px 8px;
    background-color: ${(props) => props.color};
`

const StyledMealItem = styled.div`
    display: ${(props) => props.display}
`

const StyledWrapper = styled.div`
    width: 100%;
    height: fit-content;
    align-content: start;
`

const MealList = (props) =>{
    const [breafast, setBreakfast] = useState('none');
    const [lunch, setLunch] = useState('none');
    const [dinner, setDinner] = useState('none');

    return(
        <StyledWrapper> 
            <StyledMealList color='green' onClick={() => {
                if(breakfast_v){
                    setBreakfast('block')
                    breakfast_v = true;
                }
                else{
                    setBreakfast('none')
                    breakfast_v = false
                }
            }}>
                아침
            </StyledMealList>
            <StyledMealItem id='breakfast' display={breafast}/>

            <StyledMealList color='orange' onClick={() => {
                if(lunch_v){
                    setLunch('block')
                    lunch_v = true;
                }
                else{
                    setLunch('none')
                    lunch_v = false;
                }
            }}>
                점심
            </StyledMealList>
            <StyledMealItem id='lunch' display={lunch}/>

            <StyledMealList color='red' onClick={() => {
                if(dinner_v){
                    setDinner('block')
                    dinner_v = true;
                }
                else{
                    setDinner('none')
                    dinner_v = false;
                }
            }}>
                저녁
            </StyledMealList>
            <StyledMealItem id='dinner' display={dinner}/>
        </StyledWrapper>
    );
};

export default MealList
