import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.props.count}</span>
        <input type="text"
          className="filter__input"
          onChange={this.props.onChange}
          value={this.props.filterText} />
      </div>
    )
  }
}
export default Filter