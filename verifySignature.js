const crypto = require("crypto");
const fs = require("fs");

const publicKey = fs.readFileSync("public.pem", "utf8");
const fileData = fs.readFileSync("message.txt");
const signature = fs.readFileSync("signature.txt", "utf8");

const verifier = crypto.createVerify("RSA-SHA256");
verifier.update(fileData);
verifier.end();

const isValid = verifier.verify(publicKey, signature, "hex");

console.log(isValid ? "Signature is VALID" : "Signature is INVALID");
