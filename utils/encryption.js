//
const ENCRYPTION_KEY = 'your-secret-key';

// 
export function encrypt(text) {
  // 
  // 
  const encoded = btoa(text);
  let encrypted = '';
  
  for (let i = 0; i < encoded.length; i++) {
    const charCode = encoded.charCodeAt(i) ^ ENCRYPTION_KEY.charCodeAt(i % ENCRYPTION_KEY.length);
    encrypted += String.fromCharCode(charCode);
  }
  
  return btoa(encrypted);
}

// 
export function decrypt(ciphertext) {
  try {
    const encrypted = atob(ciphertext);
    let decoded = '';
    
    for (let i = 0; i < encrypted.length; i++) {
      const charCode = encrypted.charCodeAt(i) ^ ENCRYPTION_KEY.charCodeAt(i % ENCRYPTION_KEY.length);
      decoded += String.fromCharCode(charCode);
    }
    
    return atob(decoded);
  } catch (error) {
    console.error('fall:', error);
    return '';
  }
}
