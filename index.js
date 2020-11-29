// É nexessário instalar a biblioteca resquest com: npm install --save request

const request = require('request')


const getPriceBitcoinUSD = () => {
    const url = 'https://api.coinbase.com/v2/prices/spot?currency=USD'
    const callback = (error, httpResponse, body) => {
        const response = JSON.parse(body)
        console.log(response.data.amount)
    }

    request(url, callback)
}

const getPriceBitcoinBRL = () => {
    const url = 'https://api.bitcointrade.com.br/v2/public/BRLBTC/ticker'
        const callback = (error, httpResponse, body) => {
        const response = JSON.parse(body)
        console.log(response.data.last)
    }

    request(url, callback)
}

getPriceBitcoinUSD()
getPriceBitcoinBRL()

