import { RatingProps } from "./Rating.props";
import styles from './Rating.module.css';
import cn from 'classnames';
import {useEffect, useState, KeyboardEvent} from "react";
import StarIcon from './star.svg';

export const Rating = ({rating, isEditable = false, setRating, children, className, ...props}: RatingProps):JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) =>{
        const UpdatedArray = ratingArray.map((ratingElement: JSX.Element, index: number) => {
            return(
                <span 
                    className = {cn(styles.star, {
                        [styles.filled]: index<currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter = {() => changeRatingDisplay(index+1)}
                    onMouseLeave = {() => changeRatingDisplay(rating)}
                    onClick = {() => onClickRating(index+1)}
                >
                        <StarIcon 
                        tabIndex = {isEditable? 0: -1}
                        onKeyDown = {(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(index+1, e)}
                        />
                </span>
            );
        });
        setRatingArray(UpdatedArray);
    }

    const changeRatingDisplay = (index:number)=>{
        if(!isEditable) return;
        constructRating(index);
    }

    const onClickRating = (index:number)=>{
        if(!isEditable || !setRating) return;

        setRating(index);
    }

    const handleSpace = (index:number, event: KeyboardEvent<SVGAElement>) =>{
        if(event.code != 'Enter' || !setRating) return;

        setRating(index);
    }

    return (
        <div {...props}>
            {ratingArray.map((rating, index) => (<span key={index}>{rating}</span>))}
        </div>
    )
}