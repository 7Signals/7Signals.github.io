import React, {Component} from 'react'
import Vivus from 'vivus'
import logo from './logo.svg'
import css from './Logo.css'
console.log(css)
class componentName extends Component {

  componentDidMount() {
    const vivusLogo = new Vivus('logo-svg-container', {
      type: 'delayed',
      file: logo,
      duration: 100,
      start: 'manual'
    })

    setTimeout(function() {
      vivusLogo.play(1, function(l) {
        console.log(l)
        l.el.classList.add('finished')
      })
    }, 700)
  }
  render () {
    return (
      <div className="svg-container">
        <div id="logo-svg-container"></div>
      </div>
    )
  }
}

export default componentName
