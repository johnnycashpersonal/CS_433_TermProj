// analysis/engine/patternDetector.js
/**
 * Scans tokens for dangerous patterns that could make them predictable.
 * Think of this as a detective looking for telltale signs of weak token generation.
 * 
 * Detects patterns like:
 * - Embedded timestamps
 * - Sequential numbers
 * - Encoded user information
 * - Simple encodings (like base64)
 */