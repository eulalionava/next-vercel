import Link from "next/link"
import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/abount'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/principal'
    },
];

export const Navbar = ()=>{
    return(
        <nav className={styles.menu}>
            { menuItems.map( ({text,href})=>(
                <ActiveLink key={ href } href={ href } text={ text }/>
            ))}
        </nav>
    )
}