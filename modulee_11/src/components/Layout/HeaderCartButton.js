import CartIcon from '../Cart/CartIcon';
import styles from '../Layout/HeaderCartButton.module.css'
import { useContext } from 'react';
import cartContext from '../../Store/cart-context';
const HeaderCartButton = (props)=>{
    const cartCxt = useContext(cartContext);
    const numberOfItems = cartCxt.items.reduce((curNumber,item) => {
        return curNumber+item.amount;
    },0)
    return (
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon/>

            </span>
            <span>
                Your Cart
            </span>
            <span className={styles.badge}>
               {numberOfItems}
            </span>
    </button>
    );

}
export default HeaderCartButton;