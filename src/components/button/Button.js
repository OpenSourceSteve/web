import styles from './Button.module.css'

export const Button = ({ isLoading, children }) => {
    if (isLoading) {
        return (
            <button type="button" className={styles.button}>
                <span className={styles.spinnerBorder} role="status" aria-hidden="true"></span>
                <span className={styles.visuallyHidden}>Loading...</span>
            </button>
        )
    }
    return <div className={`flex justify-between`}>{children}</div>;
}