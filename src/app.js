import Vivus from 'vivus'
import css from './app.css'

const logo = new Vivus('logo', {
    type: 'delayed',
    duration: 100,
    start: 'manual',
})

setTimeout(function() {
    logo.play(1, function(l) {
        l.el.classList.add('finished');
    })
}, 700)