import { Fragment } from 'react'
import styles from './modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClose}>

    </div>

}
const ModalOverlay = (props) => {

    return <div className={styles.modal}>
        <div className={styles.content}>
            {props.children}
        </div>

    </div>

}
const portalPlace = document.getElementById('overlays');
const Modal = (props) =>{

        return <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalPlace)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalPlace)}
        </Fragment>

}
export default Modal;