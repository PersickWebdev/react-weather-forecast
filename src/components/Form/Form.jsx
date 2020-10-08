import React from "react";
import style from './Form.module.css';

const Form = (props) => {
    return (
        <form className={style.form__container} onSubmit={props.getWeather}>
            <input type='text' name='city' placeholder='Enter your city'/>
            <button>Get forecast</button>
        </form>
    )
}

export default Form;