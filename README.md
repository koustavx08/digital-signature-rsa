# Digital Signing Tool using RSA

This project implements a digital signing system using RSA asymmetric cryptography.

A file is signed using a private key, and the signature can be verified by anyone
using the corresponding public key to ensure authenticity and integrity.

## Features
- RSA 2048-bit key generation
- File signing using private key
- Signature verification using public key
- Tamper detection

## Technologies Used
- Node.js
- RSA (Asymmetric Encryption)
- SHA-256
- Built-in crypto module

## How to Run
1. Generate keys:
   node generateKeys.js
2. Sign file:
   node signFile.js
3. Verify signature:
   node verifySignature.js
