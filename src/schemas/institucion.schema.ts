import { Schema } from 'mongoose';

export const InstituacionSchema = new Schema({
    nombres: String,
    sigla: String,
    pais: String,
    ciudad: String,
    tipoInstitucion: String,
    telefono: String,
    direccion: String,
    direccionWeb: String,
    correo: String,
    password: String,
    imgPortada: String,
    imgLogo: String,
    fechaRegistro: { type : Date, default: Date.now, },
    fechaActualizar: { type : Date, default: null, },
    fechaEliminar: { type : Date, default: null, },
})