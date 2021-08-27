import {Ingredient} from "./Ingredient";

export interface Meal {
    name: string,
    description: string
    imageUrl?: string
    ingredients: Ingredient[]
}