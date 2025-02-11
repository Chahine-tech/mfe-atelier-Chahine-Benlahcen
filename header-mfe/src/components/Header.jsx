function Header() {
  return (
    <header style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '1rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <h1 style={{
          margin: 0,
          fontSize: '1.5rem',
          fontWeight: 600,
          letterSpacing: '0.5px'
        }}>
          Mon Application MFE
        </h1>
        
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <a href="#" style={{
            color: 'white',
            textDecoration: 'none',
            padding: '0.5rem',
            transition: 'color 0.3s ease',
            fontSize: '1rem',
            ':hover': {
              color: '#3498db'
            }
          }}>Accueil</a>
          <a href="#" style={{
            color: 'white',
            textDecoration: 'none',
            padding: '0.5rem',
            transition: 'color 0.3s ease',
            fontSize: '1rem',
            ':hover': {
              color: '#3498db'
            }
          }}>Services</a>
          <a href="#" style={{
            color: 'white',
            textDecoration: 'none',
            padding: '0.5rem',
            transition: 'color 0.3s ease',
            fontSize: '1rem',
            ':hover': {
              color: '#3498db'
            }
          }}>Contact</a>
          <button style={{
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            fontSize: '0.9rem',
            fontWeight: 500,
            ':hover': {
              backgroundColor: '#2980b9'
            }
          }}>
            Connexion
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;