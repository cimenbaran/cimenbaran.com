const AboutSection = () => {
    return (
      <section style={styles.aboutSection}>
        <div style={styles.content}>
          <h2 style={styles.title}>Kimiz Biz?</h2>
          <p style={styles.description}>
            Baran Çimen olarak, inovasyon ve teknoloji odaklı sanal tur çözümleri sunuyoruz. Hedefimiz, projelerinizi sanal ortamda daha erişilebilir kılmak.
          </p>
        </div>
      </section>
    );
  };
  
  const styles = {
    aboutSection: {
      padding: '60px 20px',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
    },
    content: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '20px',
    },
    description: {
      fontSize: '1.25rem',
      color: '#555',
    },
  };
  
  export default AboutSection;
  