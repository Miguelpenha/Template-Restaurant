import { Dinero } from 'dinero.js'

const currencySymbols = {
    BRL: 'R$'
}

function toFormatSafe(dinero: Dinero) {
    const [units, subunits] = dinero.toRoundedUnit(2).toString().split('.')
    const currency = currencySymbols[dinero.getCurrency()]
    const stringified = subunits ? [units, subunits.padEnd(2, '0')].join('.') : [units, '00'].join(',')

    return `${currency} ${stringified}`
}

export default toFormatSafe