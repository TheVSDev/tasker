import styles from "@/web/styles/Form.module.css"

const SubmitButton = (props) => {
    const { btnLabel } = props

    return (
        <input type="submit" value={btnLabel} className={styles.btn} />
    )
}

export default SubmitButton