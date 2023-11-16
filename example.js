import StabilityApiClient from "./index.js";

const API_KEY = "<YOUR_API_KEY>"
const API_SECRET = "<YOUR_API_SECRET>"
const URL = 'https://api.stabilitybtc.com'

let client = new StabilityApiClient(API_KEY, API_SECRET, URL)

console.log('----------------- USER PROFILE ---------------------')
let res = await client.fetchUser()
console.log(res)

console.log('----------------- USER ACCOUNT---------------------')
res = await client.fetchAccount()
console.log(res)

console.log('----------------- CREATE SUBACCOUNT ---------------------')
res = await client.createSubAccount()
console.log(res)

console.log('----------------- GET QUOTE ---------------------')
res = await client.getQuote('BTC', 'USD', '0.005')
console.log(res)

console.log('----------------- CREATE USD DEPOSIT TO MASTER ---------------------')
res = await client.createDeposit(1000, 'USD', 'Bitcoin', null)
console.log(res)

console.log('----------------- CREATE USD DEPOSIT TO SUBACCOUNT ---------------------')
res = await client.fetchUser()
const subAccount = res.data.subAccounts[0]
res = await client.createDeposit(1000, 'USD', 'Bitcoin', subAccount)
console.log(res)