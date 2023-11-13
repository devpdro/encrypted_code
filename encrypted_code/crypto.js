const crypto = require('crypto');

const textoOriginal = 'A vida é uma vai e vem que não tem volta.';
const chaveSecreta = 'cZ51%7|<OKJT';

crypto.scrypt(chaveSecreta, 'salt', 32, (err, key) => {
  if (err) throw err;

  const iv = crypto.randomBytes(16);
 
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

  let textoCriptografado = cipher.update(textoOriginal, 'utf-8', 'hex');
  textoCriptografado += cipher.final('hex');

  console.log('Texto Criptografado:', textoCriptografado);
  console.log('IV:', iv.toString('hex'));
});
