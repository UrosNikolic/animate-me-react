import React, { Component } from 'react'

class MyComponent extends Component {
  handleClick() {
    console.log('Test Click!')
  }

  render() {
    const { color, children } = this.props
    return (
      <button onClick={this.handleClick} style={{ color }}>
        {children}
      </button>
    )
  }
}

export default MyComponent
