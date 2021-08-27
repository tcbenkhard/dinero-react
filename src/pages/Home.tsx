import {FixedNavButton} from "../components/Buttons";
import React from "react";
import MealsOverview from "../components/MealsOverview";

export const Home = () => {
    return (
        <div>
            <MealsOverview />
            <FixedNavButton linkTo='/create' text='+' />
        </div>
    )
}