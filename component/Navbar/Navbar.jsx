import styles from "./Navbar.module.scss";

export default function Home() {

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarLogo}></div>
        <div className={styles.navbarButtonsHolder}></div> 
        <div className={styles.navbarLangHolder}></div>
      </div>
    </>
  )
}
