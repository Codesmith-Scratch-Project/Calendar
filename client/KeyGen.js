import bcrypt from 'bcryptjs';


export default class KeyGen {
  /* 
  **
  ** Requires bcrypt
  **
  */

  static saltRounds = 10;
  static saltLength = 29;

  /* 
  ** Generates a key from a user password
  ** @param password: String
  ** output: Object { keyString: String, hashedKey: String }
  */
  static genKeyString(password) {

    const params = {};
  
    return bcrypt.genSalt(saltRounds)
      .then(salt => {
        params.salt = salt;
        return bcrypt.hash(password, salt);
      })
      .then(hash => {
        const key = hash.slice(saltLength, hash.length);
        params.key = key;
        return bcrypt.hash(key, params.salt);
      })
      .then(secondHash => {
        params.hashedKey = secondHash;
        return { keyString: params.key, hashedKey: params.hashedKey };
      })
      .catch(err => console.log(err));
  
  }

  /* 
  ** Retrieves an encryption key from its hash and the user password 
  ** @param hashedKey: String
  ** @param password: String
  ** output: String
  */
  static retrieveKey(hashedKey, password) {

    params = {
      salt: hashedKey.slice(0, saltLength)
    };
  
    return bcrypt.hash(password, params.salt)
      .then(hash => {
        const potentialKey = hash.slice(saltLength, hash.length);
        params.potentialKey = potentialKey;
        return bcrypt.compare(potentialKey, hashedKey);
      })
      .then(result => {
        if (!result) return undefined;
        return params.potentialKey;
      })
      .catch(err => console.log(err));
    
  
  }
}






