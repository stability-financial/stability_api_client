import crypto from 'crypto'

export const createAuthHeader = (apiKey, apiSecret, method, path, body) => {

    const hmac = crypto.createHmac("sha256", apiSecret);
    const time = Date.now().toString();

    hmac.update(time);
    hmac.update(method);
    hmac.update(path);

    const contentHash = crypto.createHash("md5");
    contentHash.update(JSON.stringify(body));

    hmac.update(contentHash.digest("hex"));
    const signature = hmac.digest("hex")

    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "X-API-KEY": apiKey,
        "X-SIGNATURE": signature,
        "X-TIMESTAMP": time
    }

    return header
}
