const crypto = require('crypto');

const pass = 'password';

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');

    /* crypto.pbkdf2 함수 파라미터 */
    // 비밀번호, salt, 반복 횟수, 비밀번호 길이, 해시 알고리즘
    crypto.pbkdf2(pass, salt, 100000, 64, 'sha512', (err, key) => {
        console.log(`salt: ${salt}`);
        console.log(`key: ${key.toString('base64')}`);
    });
});