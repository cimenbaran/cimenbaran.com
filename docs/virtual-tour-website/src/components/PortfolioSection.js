const PortfolioSection = () => {
    return (
      <section style={styles.portfolio}>
        <div style={styles.content}>
          <h2 style={styles.title}>Projelerimiz</h2>
          <p style={styles.description}>
            Sunduğumuz sanal tur hizmetleri ile farklı sektörlerdeki projelere değer kattık. İşte bazı örnekler:
          </p>
          <div style={styles.projectList}>
            <div style={styles.project}>
              <img src="/images/project1.jpg" alt="Proje 1" style={styles.projectImage} />
              <button style={styles.detailsButton}>Detaylar</button>
            </div>
            <div style={styles.project}>
              <img src="/images/project2.jpg" alt="Proje 2" style={styles.projectImage} />
              <button style={styles.detailsButton}>Detaylar</button>
            </div>
            <div style={styles.project}>
              <img src="/images/project3.jpg" alt="Proje 3" style={styles.projectImage} />
              <button style={styles.detailsButton}>Detaylar</button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  const styles = {
    portfolio: {
      padding: '60px 20px',
      backgroundColor: '#fff',
      textAlign: 'center',
    },
    content: {
      maxWidth: '1000px',
      margin: '0 auto',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '20px',
    },
    description: {
      fontSize: '1.25rem',
      color: '#555',
      marginBottom: '30px',
    },
    projectList: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '20px',
    },
    project: {
      width: '30%',
      textAlign: 'center',
    },
    projectImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    detailsButton: {
      marginTop: '10px',
      padding: '10px 20px',
      backgroundColor: '#0070f3',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };
  
  export default PortfolioSection;
  