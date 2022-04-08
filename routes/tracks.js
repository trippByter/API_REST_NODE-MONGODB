/* L A S    R U T A S    S O N    
P U N T O S    D E    A C C E S O.

----------------------------------

D E V O L V E M O S    O B J E T O    E N    
E S T R U C T U R A    J S O N
P O R    E S O    S E    C O N O C E    C O M O
'A P I - R E S T',    E S    C O N S U M I D A
P O R    U N    F R O N T E N D
*/
const express = require("express");
// El router es el manejador de las rutas
const router = express.Router();

//Generamos la ruta de tracks
// http://localhost/tracks con métodos GET, POST, DELETE, PUT (CRUD)

// Obtenemos lista
router.get("/", (req, res) => {
    const data = ["kunamasta", "pachamama"]
    res.send({data}); // res.send({data:data}) 
});

module.exports = router;