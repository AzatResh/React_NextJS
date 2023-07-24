import { ButtonProps } from "./Button.props";
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';
import cn from 'classnames'
import React from "react";

export const Button = ({buttonType, arrow = 'none', children, className, ...props}: ButtonProps):JSX.Element => {
    return(
        <button 
            className={cn(styles.button, className, {
            [styles.primary] : buttonType == 'primary',
            [styles.ghost] : buttonType == 'ghost',
        })}
            {...props}
            > 
                {children} 

                {arrow !== 'none' && 
                    <span className={cn(styles.arrow, {
                        [styles.arrow_down] : arrow === 'down'
                    })}> 
                        <ArrowIcon/>
                    </span>
                }
        </button>
    );
}