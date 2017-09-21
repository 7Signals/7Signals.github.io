import React, {Component} from 'react'
import Logo from './Logo'
import './App.css'

class App extends Component {
  render() {
    return (
      <section className="app is-fullheight">
        <div className="app-body">
          <div className="container is-centered has-text-centered">
            <div className="columns">
              <div className="column is-6 is-offset-3">
                <h1 className="title is-2">creative thinking with the touch of sarcasm</h1>
                <Logo/>
                <h1 className="title is-2">dont believe me?</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default App
