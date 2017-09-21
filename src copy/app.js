import css from './app.css'
import Vivus from 'vivus'

const logo = new Vivus('logo', {
  type: 'delayed',
  duration: 100,
  start: 'manual'
})

setTimeout(function() {
  logo.play(1, function(l) {
    l.el.classList.add('finished')
  })
  document.querySelector('#revealText')
    .onclick = () => {
      document.querySelector('#upperText')
        .classList.add('revealText')
    }
}, 700)