import React from "react";

class HandleError extends React.Component {
  state = {
    handleError: false,
  };

  componentDidCatch(error, info) {
    this.setState({ handleError: true });
  }

  render() {
    if (this.state.handleError) return <p>Oops! Vaya! se ha producido un error.</p>;

    return this.props.children;
  }
}

export default HandleError;
