import styles from "@/web/styles/Home.module.css"

const Title = (props) => {
    const { titleLabel } = props

    return (
        <h1 className={styles.title}>
            {titleLabel}
        </h1>
    )
}

export default Title