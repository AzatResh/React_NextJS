import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface RatingProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children?: ReactNode;
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
}