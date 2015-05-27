export default (React) => {
  const transformProps = (Component, transform) => class extends React.Component {
    render() {
      return <Component {...transform(this.props)} />;
    }
  };

  const wrap = (Wrapper, ...components) => class extends React.Component {
    render() {
      return <Wrapper {...this.props}>
        {...components}
      </Wrapper>;
    }
  };

  const style = (Component, getStyle) => class extends React.Component {
    render() {
      return <Component {...this.props} {style=(typeof getStyle === 'function' ? getStyle(this.props) : getStyle)} />;
    }
  }
};
