import { ParagraphProps } from "./Paragraph.props";
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({size = 'm', children, className, ...props}: ParagraphProps):JSX.Element => {
    return (
        <p className={cn(className, {
            [styles.m] : size === 'm',
            [styles.s]: size === 's',
            [styles.l]: size === 'l'
        })}>
            {children}
        </p>
    )
}