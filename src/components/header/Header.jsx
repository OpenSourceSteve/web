import { Auth } from 'aws-amplify';

import {
    Dropdown,
    Link,
    Logo,
    Navbar
} from "../"

import { logger } from "../../utils/logger";

// import styles from './Header.module.css'

const Logger = logger();

export const Header = ({ links, pages }) => {
    const signOut = async () => {
        try {
            await Auth.signOut();
        } catch (error) {
            Logger.error('Sign out', error);
        }
    }

    if (pages) {
        return (
            <header className="w-full bg-stone-900 h-14 flex items-center">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <Logo />
                        <Navbar pages={pages} />
                    </div>
                    <Dropdown title={"account"} signOut={signOut} />
                </div>
            </header>
        )
    }

    if (links.length) {
        return (
            <header className="fixed top-0 w-full bg-stone-900 h-14 flex items-center">
                <div className="container mx-auto flex justify-between">
                    <Logo />
                    <ul className="flex">
                        {links.map(link => <li className="first:mr-4" key={link}><Link path={`/${link}`} color={"white"} text={link} /></li>)}
                    </ul>
                </div>
            </header>
        )
    }
}