import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: false};
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true, error };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.error(error, errorInfo)
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <p>{this.state.error.message}</p>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;