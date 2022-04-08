/*L O S    M O D E L O S    H A C E N    R E F E R E N C I A
A    L A    E S T R U C T U R A    D E    D A T O S
Q U E    E X I S T I R Á N    E N    L A
B A S E    D E    D A T O S
*/

const mongoose = require("mongoose");
// Declaramos el 'SCHEMA': Estructura, esquema
const UserSchema = new mongoose.Schema(
    {
        name:{
            type: String
        },
        age:{
            type: Number
        },
        email:{
            type: String,
            // Indicamos que no se repita en la BD
            unique: true
        },
        password:{
            type: String
        },
        // Permisos. Usuarios con rol 'admin' u otro rol
        role:{
            type: ["user", "admin"],
            default: "user",
        }
    },
    {   
        // Creamos los campos necesarios
        // para manejar las marcas de tiempo:
        // createAt, updateAt
        timestamps: true,
        versionKey: false,
    }
);

//             Nombre de la colección  | Estructura
module.exports = mongoose.model("users", UserSchema);