const HeroSection = () => {
  return (
    <section
      className="fadeInUp"
      style={{
        ...styles.heroSection,
        backgroundImage: 'url("/images/hero-bg.jpg")',
        backgroundSize: 'cover',  // Görselin tüm ekranı kaplamasını sağlar
        backgroundPosition: 'center',  // Görselin ortalanmasını sağlar
        backgroundAttachment: 'fixed',  // Görselin sabit kalmasını sağlar
      }}
    >
      <div style={styles.content}>
        <h1 className="fadeInUpSlow" style={styles.title}>Vizyoner Sanal Tur Çözümleri</h1>
        <p className="fadeInUpSlow" style={styles.description}>Yüksek kaliteli sanal turlar ile projelerinizi keşfedin.</p>
        <button style={styles.button}>Keşfet</button>
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    color: 'white',
    padding: '60px 20px',
    textAlign: 'center',
    minHeight: '100vh',  // Ekran boyutunu kaplamak için minimum yükseklik
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    zIndex: 1,  // İçeriğin görselin üstünde görünmesini sağlar
    position: 'relative',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
    textShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)', // Yazıyı daha okunabilir yapmak için gölge
  },
  description: {
    fontSize: '1.5rem',
    marginBottom: '30px',
    textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)', // Yazıyı daha okunabilir yapmak için gölge
  },
  button: {
    padding: '15px 30px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

  
  export default HeroSection;
  