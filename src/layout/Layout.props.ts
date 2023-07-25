import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface LayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    size?: 's' | 'm';
    color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
    href?: string;
    children: ReactNode;
}