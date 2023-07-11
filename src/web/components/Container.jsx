import styles from "@/web/styles/Home.module.css"

const Container = (props) => {
    const { children } = props

    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Container