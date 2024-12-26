import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o estado para mostrar a UI de fallback na próxima renderização.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Você pode enviar o erro para um serviço de log aqui.
    console.error("Erro capturado pelo ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ops! Algo deu errado. Tente novamente mais tarde.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
