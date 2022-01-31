import forge from 'node-forge';


export default class AESWrapper {
  /* 
  **
  ** Requires node-forge
  **
  */

  static encryptData(unencryptedData, keyString) {

    // generate a random key and IV
    const iv = forge.random.getBytesSync(256 / 8);
    const salt = forge.random.getBytesSync(256 / 8);
    const key = forge.pkcs5.pbkdf2(keyString, salt, 100000, 256 / 8, 'SHA256');
  
    const cipher = forge.cipher.createCipher('AES-CBC', key);
    cipher.start({iv: iv});
    cipher.update(forge.util.createBuffer(unencryptedData));
    cipher.finish();
    const encrypted = cipher.output.bytes();
  
    const params = {
      iv: forge.util.encode64(iv),
      salt: forge.util.encode64(salt),
      encrypted: forge.util.encode64(encrypted),
      concatenated: forge.util.encode64(salt + iv + encrypted)
    };
  
    return params.concatenated;
  }

  static decryptData(encryptedData, keyString) {
  
    const encrypted = forge.util.binary.base64.decode(encryptedData);
    const salt_len = iv_len = 256 / 8;
  
    const salt = forge.util.createBuffer(encrypted.slice(0, salt_len));
    const iv = forge.util.createBuffer(encrypted.slice(salt_len, salt_len + iv_len));
  
    const key = forge.pkcs5.pbkdf2(keyString, salt.bytes(), 100000, 256/8, 'SHA256');
    const decipher = forge.cipher.createDecipher('AES-CBC', key);
  
    decipher.start({iv: iv});
    decipher.update(
      forge.util.createBuffer(encrypted.slice(salt_len + iv_len))
    );
    decipher.finish();
  
    return decipher.output.toString();
    
  }

}





module.exports = { encryptData, decryptData };


