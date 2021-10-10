import {Component} from 'react'

import './index.css'

class Counter extends Component {
  onIncrement = () => {
    const {incCount} = this.props
    incCount()
  }

  onDecrement = () => {
    const {decCount} = this.props
    decCount()
  }

  render() {
    const {count} = this.props
    return (
      <div className="btnCon">
        <button
          testid="decrement-quantity"
          className="btn"
          type="button"
          onClick={this.onDecrement}
        >
          -
        </button>
        <div testid="item-quantity">{count}</div>
        <button
          testid="increment-quantity"
          className="btn"
          type="button"
          onClick={this.onIncrement}
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter
