// Imports
import Link from "next/link"

import styles from "@/web/styles/Welcome.module.css";
import Main from "@/web/components/Main";
import Footer from "@/web/components/Footer";
import HeadPage from "@/web/components/HeadPage";
import Title from "@/web/components/Title";
import Button from "@/web/components/Button";

// Home page function
export default function Home() {
  return (
    <>
      <HeadPage />
      <Main>
        <div className={styles.container}>
          <Title titleLabel="Tasker" />
          <p className={styles.paragraphe}>
            Tasker is a web task manager. You can create different lists with
            different tasks, <br /> you can organize your calender with tasks
            and events and you can create quick day-to-day lists.
          </p>
          <br />
          <Link href="/task-manager"><Button btnLabel="Let's organize" /></Link>
          <br />
          <br />
          <Link href="/sign-in"><Button btnLabel="Sign In" /></Link>
          <Link href="/sign-up"><Button btnLabel="Sign Up" /></Link>
        </div>
      </Main>
      <Footer />
    </>
  );
}
