import { ButtonProps } from "./Button.props";
import styles from './Button.module.css';
import cn from 'classnames'

export const Button = ({buttonType, children, className, ...props}: ButtonProps):JSX.Element => {
    return(
        <button 
            className={cn(styles.button, className, {
            [styles.primary] : buttonType == 'primary',
            [styles.ghost] : buttonType == 'ghost',
        })}
            {...props}
            > 
                {children} 
        </button>
    );
}