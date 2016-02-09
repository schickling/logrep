import React, { Component, PropTypes } from 'react'
import styles from './FilterBar.module.css'

class FilterBar extends Component {

  static propTypes = {
    //increment: PropTypes.func.isRequired,
    //incrementIfOdd: PropTypes.func.isRequired,
    //incrementAsync: PropTypes.func.isRequired,
    //decrement: PropTypes.func.isRequired,
    //counter: PropTypes.number.isRequired
  };

  render() {
    return (
      <nav className='navbar'>
        <div className='navbar-left'>
          <div className='navbar-item'>
            <input className='input is-medium' type='text' placeholder='Filter' />
          </div>
        </div>

        <div className='navbar-right'>
          <div className='navbar-item'>
            <p className='subtitle is-5'>
              <strong>123</strong> posts
            </p>
          </div>
        </div>
      </nav>
    )
  }

}

export default FilterBar
