import StabilityApiClient from "./index.js";

const API_KEY = "<APIKEY>"
const API_SECRET = "<APISECRET>"
const URL = 'https://stabilitybtc.com'

let client = new StabilityApiClient(API_KEY, API_SECRET, URL)
let res = await client.fetchUser()
console.log(res)