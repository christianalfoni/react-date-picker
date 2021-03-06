'use strict'

require('./index.styl')

var React      = require('react')
var DatePicker = require('./src/index')

var VALUE = Date.now()
var LOCALE = 'en'

var TODAY = {
    en: 'Today',
    fr: 'Aujourd\'hui',
    de: 'Heute',
    es: 'Hoy',
    ro: 'Azi'
}

var GO2SELECTED = {
    en: 'Go to selected',
    es: 'Vaya a Favoritos',
    de: 'Zum ausgewählten',
    fr: 'Aller a la liste',
    ro: 'Mergi la selectie'
}

function emptyFn(){}

console.log('test')

var App = React.createClass({

    displayName: 'App',

    onLocaleChange: function(event) {
        LOCALE = event.target.value

        this.setState({})
    },

    render: function(){
        return <div style={{margin: 10}}>

            <p>Select locale: <select value={LOCALE} onChange={this.onLocaleChange}>
                    <option value="en">English (US)</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="es">Spanish</option>
                    <option value="ro">Romanian</option>
                </select>
            </p>

            <DatePicker
            weekDayNames={['S','M','T','W','T','F','S']}
                locale   ={LOCALE}
                date    ={VALUE}
                onChange ={this.onChange}

            />
        </div>
    },

    onChange: function(value) {
        console.log('selected ', value)
        VALUE = Array.isArray(value) ? value[0] : value;
        this.setState({})
    }
})

React.render(<App />, document.getElementById('content'))