import { React } from 'react';
import MealList from './meal_list';
import styles from './style/meal.module.css'
import StyledCalendar from './calendar.js'


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
                    <StyledCalendar />
                </div>
                {/** 식단 list div */}
                <div className={styles.meal_list}>
                    <MealList />
                </div>
            </div>

        </div>
    );
}

export default Meal;