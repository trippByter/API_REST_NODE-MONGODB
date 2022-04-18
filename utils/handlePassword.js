/* Archivo para cifrar passwd*/

// Importamos dependencias
const bcryptjs = require("bcryptjs");

// Esta función toma un texto plano y lo ciframos
/**
 * Parametro: constraseña sin cifrar: 'ejemplo123'
 * @param {*} plainPasswd 
 */
const encrypt = async(plainPasswd) => {
    // Version cifrada de nuestro passwd
    // .hash(texto_plano, aleatoriedad_a_texto_plano)
    const hash = await bcryptjs.hash(plainPasswd, 10);
    return hash;
};

// Comparar texto plano con hash
/**
 * plainPasswd = SIN cifrado | hashPasswd = CON cifrado
 * @param {*} plainPasswd 
 * @param {*} hashPasswd 
 */
const compare = async(plainPasswd, hashPasswd) => {
    return await bcryptjs.compare(plainPasswd, hashPasswd);
};

module.exports = {encrypt, compare};