class Crypto {
    constructor(name, ticker, price) {
        this.name = name;
        this.ticker = ticker;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getTicker() {
        return this.ticker;
    }

    setTicker(ticker) {
        this.ticker = ticker;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }

    // Static Methods
    // Calculate average price of all cryptos in the list.
    // Uses the reduce method to sum up the prices of all cryptos.
    // (sum, crypto) => sum + crypto.getPrice() takes the running total & the current crypto object from the array.
    // crypto.getPrice() gets the current price of that crypto.
    // Then it adds that # to the total sum.
    // cryptos.length is how we know what to divide the total sum by
    static averagePrice(cryptos) {
        return cryptos.reduce((sum, crypto) => sum + crypto.getPrice(), 0) / cryptos.length;
    }

    static filterByMinPrice(cryptos, minPrice) {
        // Uses an arrow function that takes an object from the cryptos array.
        // It calls the getPrice() method and checks if its greater than minPrice.
        // It returns an array of Crypto objects that meet this condition.
        return cryptos.filter(cryptos => cryptos.getPrice() > minPrice);
    }

    static filterByMaxPrice(cryptos, maxPrice) {
        return cryptos.filter(cryptos => cryptos.getPrice() < maxPrice);
    }

    static randomCrypto(cryptos) {
        return cryptos[Math.floor(Math.random() * cryptos.length)];
    }
}


const cryptoDataArray = [
    { name: 'Bitcoin', ticker: 'BTC', price: 50000 },
    { name: 'Ethereum', ticker: 'ETH', price: 3400 },
    { name: 'Cardano', ticker: 'ADA', price: 2.1 },
    { name: 'Binance Coin', ticker: 'BNB', price: 400 },
    { name: 'Tether', ticker: 'USDT', price: 1 },
    { name: 'Solana', ticker: 'SOL', price: 150 },
    { name: 'XRP', ticker: 'XRP', price: 1.1 },
    { name: 'Polkadot', ticker: 'DOT', price: 30 },
    { name: 'USD Coin', ticker: 'USDC', price: 1 },
    { name: 'Dogecoin', ticker: 'DOGE', price: 0.3 },
    { name: 'Avalanche', ticker: 'AVAX', price: 70 },
    { name: 'Uniswap', ticker: 'UNI', price: 25 },
    { name: 'Chainlink', ticker: 'LINK', price: 28 },
    { name: 'Litecoin', ticker: 'LTC', price: 180 },
    { name: 'Algorand', ticker: 'ALGO', price: 1.9 },
    { name: 'Bitcoin Cash', ticker: 'BCH', price: 550 },
    { name: 'Polygon', ticker: 'MATIC', price: 1.3 },
    { name: 'Stellar', ticker: 'XLM', price: 0.35 },
    { name: 'VeChain', ticker: 'VET', price: 0.12 },
    { name: 'Ethereum Classic', ticker: 'ETC', price: 55 },
    { name: 'Theta', ticker: 'THETA', price: 6 },
    { name: 'Cosmos', ticker: 'ATOM', price: 19 },
    { name: 'TRON', ticker: 'TRX', price: 0.1 },
    { name: 'Filecoin', ticker: 'FIL', price: 80 },
    { name: 'Monero', ticker: 'XMR', price: 250 },
    { name: 'Tezos', ticker: 'XTZ', price: 6.5 },
    { name: 'Aave', ticker: 'AAVE', price: 310 },
    { name: 'PancakeSwap', ticker: 'CAKE', price: 19 },
    { name: 'EOS', ticker: 'EOS', price: 5 },
    { name: 'The Graph', ticker: 'GRT', price: 0.8 },
    { name: 'Kusama', ticker: 'KSM', price: 400 },
    { name: 'NEO', ticker: 'NEO', price: 50 },
    { name: 'Maker', ticker: 'MKR', price: 2500 },
    { name: 'Compound', ticker: 'COMP', price: 400 },
    { name: 'Elrond', ticker: 'EGLD', price: 250 },
    { name: 'Decentraland', ticker: 'MANA', price: 0.8 },
    { name: 'Zcash', ticker: 'ZEC', price: 130 },
    { name: 'Yearn.finance', ticker: 'YFI', price: 32000 },
    { name: 'Sushiswap', ticker: 'SUSHI', price: 12 },
    { name: 'Synthetix', ticker: 'SNX', price: 10 }
];

// Create an empty array to store Crypto objects
let cryptos = [];

// Loop through the array to create Crypto objects and store them in cryptos
cryptoDataArray.forEach(data => {
    const newCrypto = new Crypto(data.name, data.ticker, data.price);
    cryptos.push(newCrypto);
});

// Extends the Crypto class with a summary method.
// Uses getter methods inside an anonymous function to return the relevant info for each crypto.
Crypto.prototype.summary = function() {
    return `${this.getName()} (${this.getTicker()}): $${this.getPrice()}`;
};

// Loops through the cryptos array and logs the crypto info in this format: Bitcoin (BTC): $50000
cryptos.forEach(crypto => console.log(crypto.summary()));

// Filter cryptos by name
// This function takes a substring to filter by.
// cryptos.filter creates a new array with the elements from the original that meet...
// the filter condition specified in the callback function.
function filterByName(substring) {
    return cryptos.filter(crypto => crypto.getName().toLowerCase().includes(substring.toLowerCase()));
}

console.log(filterByName("coin")); // Return all cryptos with 'coin' in their name.
console.log(filterByName("Bit")); // Return all cryptos with 'Bit' in their name.
console.log(filterByName("cash")); // Return all cryptos with 'cash' in their name.

// Group by Ticker
// Creates an empty object to store crypos by the first letter of their ticker.
const groupByTickerInitial = {};

// Loop over each element in the cryptos array.
cryptos.forEach(crypto => {
    // Calls the get method and uses the [0] to access the first letter of the ticker.
    // Stores the first letter in the 'initial' variable.
    const initial = crypto.getTicker()[0];
    // Checks if 'groupByTickerInitial' already has a property of 'initial'
    // If not, an empty array is created and assigned to 'groupByTickerInitial'
    if (!groupByTickerInitial[initial]) {
        groupByTickerInitial[initial] = [];
    }
    // Current 'crypto' obj is pushed into the array identified by its initial letter in 'groupByTickerInitial'
    groupByTickerInitial[initial].push(crypto);
});

console.log(groupByTickerInitial);

const avgPrice = Crypto.averagePrice(cryptos);
console.log(avgPrice);

const expensiveCryptos = Crypto.filterByMinPrice(cryptos, 2500);
console.log(expensiveCryptos);

const cheapCryptos = Crypto.filterByMaxPrice(cryptos, 10);
console.log(cheapCryptos);

const randomCrypto = Crypto.randomCrypto(cryptos);
console.log(randomCrypto);