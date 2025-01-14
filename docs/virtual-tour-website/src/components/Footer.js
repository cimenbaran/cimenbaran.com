const Footer = () => {
  return (
    <footer className="fadeInUp" style={styles.footer}>
      <div style={styles.content}>
        <p className="fadeInUpSlow" style={styles.contact}>İletişim: info@barancimen.com</p>
        <div style={styles.socialLinks}>
          <a href="https://instagram.com" className="fadeInUpSlow" style={styles.socialLink}>Instagram</a>
          <a href="https://linkedin.com" className="fadeInUpSlow" style={styles.socialLink}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'black',
    color: 'white',
    padding: '40px 20px',
    textAlign: 'center',
  },
  content: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  contact: {
    fontSize: '1rem',
    marginBottom: '15px',
  },
  socialLinks: {
    marginTop: '20px',
  },
  socialLink: {
    color: '#00bfff',
    margin: '0 10px',
    textDecoration: 'none',
    fontSize: '1.1rem',
  },
};


  
  export default Footer;
  