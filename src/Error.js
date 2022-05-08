import {Component} from 'react';

class Error extends Component {

  constructor(props) {
    super(props);
    this.state = {hasError: false}
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  render() {
    if(this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default Error;
