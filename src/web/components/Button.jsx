import styles from "@/web/styles/Home.module.css"

const Button = (props) => {
  const { onClick, btnLabel } = props

  return (
    <button className={styles.btn} onClick={onClick}>
      {btnLabel}
    </button>
  )
}

export default Button
