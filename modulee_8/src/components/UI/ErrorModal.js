import React from "react";
import styles from './ErrorModal.module.css'
import Card from "./Card";
import Button from "./button";
const ErrorModal = (props)=>{

        return (
            <div className={styles.backdrop} onClick={props.onClick}>
                <div/>
            
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>
                        {props.title}
                    </h2>
                </header>
                <div className={styles.content}>
                    <p>
                        {props.message}
                    </p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onClick}>Okay</Button>
                </footer>
            </Card>
            </div>
        )
}
export default ErrorModal;