const {Router} = require('express');
const router = Router();

//requerimos los métodos para manejar las peticiones
const {getTareas, getTarea, createTarea, updateTarea, deleteTarea} = require('../controllers/tareas.controller');

//rest api task
router.get('/', getTareas);
router.get('/:id', getTarea);
router.post('/', createTarea);
router.put('/:id', updateTarea);
router.delete('/:id', deleteTarea);

module.exports = router;