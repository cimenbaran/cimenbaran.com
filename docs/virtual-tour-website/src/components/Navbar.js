const Navbar = () => {
  return (
    <nav className="fadeInUp" style={styles.navbar}>
      <ul style={styles.navList}>
        <li><a href="/" className="fadeInUpSlow" style={styles.navLink}>Ana Sayfa</a></li>
        <li><a href="/portfolio" className="fadeInUpSlow" style={styles.navLink}>Portfolyo</a></li>
        <li><a href="/about" className="fadeInUpSlow" style={styles.navLink}>Hakkımızda</a></li>
        <li><a href="/contact" className="fadeInUpSlow" style={styles.navLink}>İletişim</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'black',
    padding: '20px',
  },
  navList: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem',
  },
};



export default Navbar;
