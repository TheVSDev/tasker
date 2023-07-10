import styles from "@/web/styles/Home.module.css"

const Button = (props) => {
    const { btnLabel } = props

    return (
        <button className={styles.btn}>{btnLabel}</button>
    )
}

export default Button