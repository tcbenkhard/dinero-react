import React from "react";
import { SubmitButton } from "./Buttons";
import './CreateMealForm.scss'
export const CreateMealForm = () => {
    return (
        <form className={'form'}>
            <div className="group">
                <label htmlFor={'name'}>Name</label>
                <input className={'input'} type={'text'} id={'name'}/>
            </div>

            <div className="group">
                <label htmlFor={'description'}>Description</label>
                <textarea id={'description'}/>
            </div>

            <div className="group">
                <label htmlFor={'ingredients'}>Ingredients</label>
                <textarea id={'ingredients'}/>
            </div>

            <SubmitButton text={'Save'} />
        </form>
    )
}