const crypto = require("crypto");
const fs = require("fs");

const privateKey = fs.readFileSync("private.pem", "utf8");
const fileData = fs.readFileSync("message.txt");

const signer = crypto.createSign("RSA-SHA256");
signer.update(fileData);
signer.end();

const signature = signer.sign(privateKey, "hex");
fs.writeFileSync("signature.txt", signature);

console.log("File signed successfully");
