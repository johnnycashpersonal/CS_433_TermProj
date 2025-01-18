// analysis/engine/entropyCalculator.js
/**
 * Responsible for measuring the randomness of session tokens using Shannon entropy.
 * This is like measuring how unpredictable a password is - the more random and
 * unpredictable the token, the higher its entropy score. Tokens with low entropy
 * might be guessable, making them insecure.
 * 
 * Key functions:
 * - Calculate character frequency distributions
 * - Apply Shannon's entropy formula
 * - Evaluate overall token randomness
 */