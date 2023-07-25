import { LayoutProps } from "./Layout.props";
import styles from './Layout.module.css';
import cn from 'classnames';
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { FunctionComponent } from "react";

export const Layout = ({size = 'm', href, color='primary', children, className, ...props}: LayoutProps):JSX.Element => {
    return (
        <>
            <Header/>
            header
            <div>
                <Sidebar/>
                sidebar
                {children}
            </div>
            footer
            <Footer/>
        </>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element{
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    }
}