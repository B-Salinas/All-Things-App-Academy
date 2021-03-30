# Cryptographic Types

## Symmetric Encryption
Allows you to encrypt and decrypt messages using a single key. 

- Not recommended for passwords, as it allows others to reverse engineer the message (no matter how hard). 

## Asymmetric Encryption
Allows you to encrypt and decrypt messages using two keys.

- There are 2 keys, a public and private key. You can give out the public key, but never give out the private key.
- The public key will encrypt the message, the private key will decrypt it. Using the public key to decrypt the message will result in a message that's uglier than the original encrypted version, only the private key can decrypt the message.
  - This interaction is based on the Diffie Hellman (DH) Key Exchange Algorithm:
  - ` A ≡ g^a (mod p) `
  - ` B ≡ g^b (mod p) `

## Hashing
Allows you to encrypt a message to a fixed length value. 
