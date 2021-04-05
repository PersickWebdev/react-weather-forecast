import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
    return (
        <button
            className={styles['button']}
            onClick={props.action}
            name={props.name}
            type={props.type}
        >
            {props.children}
            {props.name}
        </button>
    );
};

export default Button;
