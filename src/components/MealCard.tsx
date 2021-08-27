import React from "react";
import {Meal} from "../domain/Meal";
import './MealCard.scss'

export interface MealProps {
    meal: Meal
}

const MealCard = (props: MealProps) => {
    const styles = {
        card: {
            marginBottom: '1em',
            boxShadow: "0px 1px 5px #9E9E9E50"
        },
    }

    return (
        <div className={'mealcard'} style={styles.card}>
            <div className={'image'}>
                <img src="https://via.placeholder.com/300x150" alt="placeholder"/>
            </div>
            <div className={'details'}>
                <div className={'title'}>{props.meal.name}</div>
                <div className={'description'} >

                </div>
            </div>
        </div>
    )
}

export default MealCard;

