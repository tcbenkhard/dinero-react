import React from 'react'
import { Link } from "react-router-dom"
import './Buttons.scss';

export interface NavButtonProps {
    linkTo: string
    text: string
}

export interface SubmitButtonProps {
    text: string
}

export const SubmitButton = (props: SubmitButtonProps) => {
    return (
        <button type={"submit"} className={'btn btn-submit'}><span>{props.text}</span></button>
    )
}

export const FixedNavButton = (props: NavButtonProps) => {
    return (
        <Link to={props.linkTo}><button className={'btn btn-float'}>{props.text}</button></Link>
    )
}