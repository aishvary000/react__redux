import Modal from '../UI/Modal';
import styles from './Cart.module.css'
const Cart = (props)=>{
    const CartItems = <ul className={styles['cart-items']}>{[{
        id:'c1',
        name:'sushi',
        amount:'2',
        price:12.99
    }].map(cartItem => <li>{cartItem.name}</li>)}</ul>
    return <Modal onClose={props.onClose}>
        {CartItems}
        <div className={styles.amount}>
            <span className={styles.total}>Amount</span>
            <span>25.63</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
            <button className={styles.button}>Order</button>

        </div>
    </Modal>
}
export default Cart;
