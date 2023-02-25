import { NavLink } from "react-router-dom";
import styles from './mainNavigation.module.css'
const MainNavigation = () => {
    return <header className={styles.header}>
        <ul className={styles.list}>
            <li><NavLink to="/" className={({isActive}) => isActive?styles.active:undefined}>Home</NavLink></li>
            <li><NavLink to = "/products" className={({isActive}) => isActive?styles.active:undefined}>Products</NavLink></li>
        </ul>
    </header>
}
export default MainNavigation;