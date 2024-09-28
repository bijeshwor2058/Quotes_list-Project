import styles from './header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <a href="#">
        <img src="	https://flowbite.com/docs/images/logo.svg" />
        </a>

        <a href=""><span>GeekFoods</span></a>
      </div>

      <div className={styles.anchor}>
        <ul>
          <a href="" style={{color:'#3b82f6'}}>Home</a>
          <a href="">Quote</a>
          <a href="">Resturants</a>
          <a href="">Foods</a>
          <a href="">Contact</a>
        </ul>
      </div>

        <button className={styles.start_btn}>Get started</button>

        <button  className={styles.hamburger}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </button>
    </div>
  );
};

export default Header;
