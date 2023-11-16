import { createAuthHeader } from "./auth.js"


export default class StabilityApiClient {

    constructor(apiKey, apiSecret, url) {
        this.apiKey = apiKey
        this.apiSecret = apiSecret
        this.baseUrl = url
    }

    async fetchUser(uid) {
        try {
            const path = '/user'
            const method = "GET"
            const body = {}
            const url = this.baseUrl + path
            const authHeader = createAuthHeader(this.apiKey, this.apiSecret, method, path, body)
            const result = await fetch(url, { method: method, headers: authHeader })
            const jsonResult = await result.json()
            return jsonResult
        } catch (e) {
            throw Error(e)
        }
    }

    async fetchAccount(uid) {
        try {
            let path = '/account'
            if (uid) {
                path += `?id=${uid}`
            }
            const method = "GET"
            const body = {}
            const url = this.baseUrl + path
            const authHeader = createAuthHeader(this.apiKey, this.apiSecret, method, path, body)
            const result = await fetch(url, { method: method, headers: authHeader })
            const jsonResult = await result.json()
            return jsonResult
        } catch (e) {
            throw Error(e)
        }
    }

    async createSubAccount() {
        try {
            let path = '/user/create'
            const method = "POST"
            const body = {}
            const url = this.baseUrl + path
            const authHeader = createAuthHeader(this.apiKey, this.apiSecret, method, path, body)
            const result = await fetch(url, { method: method, headers: authHeader })
            const jsonResult = await result.json()
            return jsonResult
        } catch (e) {
            throw Error(e)
        }
    }

    async createDeposit(amount, currency, network, user_id) {
        try {
            let path = '/wallet/deposit'
            const method = "POST"
            const body = {
                amount,
                currency,
                user_id,
                network: network ? network : 'Bitcoin',
            }
            const url = this.baseUrl + path
            const authHeader = createAuthHeader(this.apiKey, this.apiSecret, method, path, body)
            const result = await fetch(url, { method: method, headers: authHeader, body: JSON.stringify(body) })
            const jsonResult = await result.json()
            return jsonResult
        } catch (e) {
            throw Error(e)
        }
    }

    async createWithdrawal(amount, currency, network, withdrawal_address, payment_request, user_id) {
        try {
            let path = '/wallet/withdrawal'
            const method = "POST"
            const body = {
                amount,
                currency,
                user_id,
                withdrawal_address,
                payment_request,
                network: network ? network : 'Bitcoin',
            }
            const url = this.baseUrl + path
            const authHeader = createAuthHeader(this.apiKey, this.apiSecret, method, path, body)
            const result = await fetch(url, { method: method, headers: authHeader, body: JSON.stringify(body) })
            const jsonResult = await result.json()
            return jsonResult
        } catch (e) {
            throw Error(e)
        }
    }

    async getQuote(from, to, amount) {
        try {
            let path = `/quote?from=${from}&to=${to}&amount=${amount}`
            const method = "GET"
            const body = {}
            const url = this.baseUrl + path
            const authHeader = createAuthHeader(this.apiKey, this.apiSecret, method, path, body)
            const result = await fetch(url, { method: method, headers: authHeader })
            const jsonResult = await result.json()
            return jsonResult
        } catch (e) {
            throw Error(e)
        }
    }

    async makeSwap(from, to, amount) {
        try {
            let path = `/swap`
            const method = "POST"
            const body = { from: from, to: to, amount}
            const url = this.baseUrl + path
            const authHeader = createAuthHeader(this.apiKey, this.apiSecret, method, path, body)
            const result = await fetch(url, { method: method, headers: authHeader, body: JSON.stringify(body) })
            const jsonResult = await result.json()
            return jsonResult
        } catch (e) {
            throw Error(e)
        }
    }
}