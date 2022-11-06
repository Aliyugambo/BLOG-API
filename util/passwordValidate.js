const bcrypt = require('bcrypt');

const passwordValidate = async (password, hashedPassword) => {
    const userPassword = await bcrypt.compare(password, hashedPassword);
    return userPassword;
};

module.exports = { passwordValidate };