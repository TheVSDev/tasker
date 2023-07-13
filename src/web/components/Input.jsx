import styles from "@/web/styles/List.module.css"

const Input = (props) => {
    const { type, value, onChange, placeholder } = props
    return (
        <input className={styles.input} type={type} value={value} onChange={onChange} placeholder={placeholder} />
    )
}

export default Input