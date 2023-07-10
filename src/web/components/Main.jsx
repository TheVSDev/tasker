import styles from "@/web/styles/Home.module.css"

const Main = (props) => {
    const { children } = props

    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}

export default Main