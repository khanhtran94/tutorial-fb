function Square(props) {
  return (
    <button
      className="square"
      onClick={() => this.props.onClick()}>
      {this.props.value}
    </button>
  )


}