const modalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modal: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      width: '400px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    input: {
      width: '100%',
      marginBottom: '10px',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ddd',
    },
    textarea: {
      width: '100%',
      marginBottom: '10px',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      height: '100px',
      resize: 'none',
    },
    modalActions: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  };
  
  export default modalStyles;
  