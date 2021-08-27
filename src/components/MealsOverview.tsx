import React, {useEffect, useState} from "react";
import MealCard from "./MealCard";
import {API} from 'aws-amplify';

const MealOverview = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        API.get('dinero-api', '/meals', {})
            .then(data => setMeals(data))
            .catch(error => logError(error));
    }, []);

    const logError = (error: Error) => {
        console.error(error);
    }

    const styles = {
        overview: {
            display: 'flex',
            flexWrap: 'wrap' as 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2em'
        }
    }

    const mealOverview = meals.map(meal => (
        <MealCard meal={meal} />
    ));

    return (
            <div style={styles.overview}>
                {mealOverview}
            </div>
    );
}

export default MealOverview;