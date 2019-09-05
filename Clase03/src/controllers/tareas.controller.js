const tareaController = {};

const TareaModel = require('../models/Tarea'); //requerimos el modelo tarea

tareaController.getTareas = async(req, res) => {
    try {
        const tareas = await TareaModel.find();
        res.json(tareas);
    } catch (error) {
        res.json({
            success: false,
            message: 'Ha ocurrido un error'
        });
    }
};

tareaController.getTarea = async(req, res) => {
    try {
        const tarea = await TareaModel.findById(req.params.id)
        res.json(tarea);
    } catch (error) {
        res.json({
            success: false,
            message: 'Ha ocurrido un error'
        });
    }
};

tareaController.createTarea = async(req, res) => {
    const {title, description} = req.body;

    if(!title){
        return res.json({
            success: false,
            message: 'El título no puede estar vacío'
        });
    }

    if(!description){
        return res.json({
            success: false,
            message: 'La descripción no puede estar vacía'
        });
    }

    //creamos un nuevo objeto tarea a partir del modelo
    const newTarea = new TareaModel({
        title,
        description
    });

    try {
        await newTarea.save();
        res.json({
            success: true,
            message: 'La tarea ha sido creada'
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Ha ocurrido un error'
        });
    }


};

tareaController.updateTarea = async(req, res) => {
    try {
        await TareaModel.findByIdAndUpdate({_id: req.params.id}, req.body);
        res.json({
            success: true,
            message: 'Tarea actualizada'
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Ha ocurrido un error'
        });
    }
};

tareaController.deleteTarea = async(req, res) => {
    try {
        await TareaModel.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: 'Tarea ha sido eliminada'
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Ha ocurrido un error'
        });
    }
};

module.exports = tareaController;