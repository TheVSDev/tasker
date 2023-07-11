// Imports
import Image from "next/image";
import Link from "next/link";

import styles from "@/web/styles/Sidebar.module.css";

// Sidebar function
const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <Link href="/task-manager">
          <div className={styles.iconContainer}>
            <Image
              src="/list.svg"
              alt="Task Manager icon"
              width={44}
              height={28}
            />
        <span className={styles.tooltip}>Task Manager</span>
          </div>
        </Link>
        <Link href="/calendar">
          <div className={styles.iconContainer}>
            <Image
              src="/calendar.svg"
              alt="Calendar icon"
              width={44}
              height={28}
            />
        <span className={styles.tooltip}>Calendar</span>
          </div>
        </Link>
        <Link href="/clipboard-list">
          <div className={styles.iconContainer}>
            <Image
              src="/clipboard.svg"
              alt="Clipboard icon"
              width={44}
              height={20}
            />
        <span className={styles.tooltip}>Clipboard List</span>
          </div>
        </Link>
        <Link href="/profile">
          <div className={styles.iconContainerSeparator}>
            <Image
              src="/profile.svg"
              alt="Profile icon"
              width={44}
              height={28}
            />
        <span className={styles.tooltip}>Profile</span>
          </div>
        </Link>
        <Link href="/">
          <div className={styles.iconContainer}>
            <Image
              src="/log-out.svg"
              alt="Log out icon"
              width={44}
              height={28}
            />
        <span className={styles.tooltip}>Log out</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
