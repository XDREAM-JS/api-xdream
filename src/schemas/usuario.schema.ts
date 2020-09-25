import { Schema } from 'mongoose';

export const UsuarioSchema = new Schema({
    nombres: String,
    apellidos: String,
    genero: String,
    departamento: String,
    correo: String,
    password: String,
    rol: String,
    fechaRegistro: { type : Date, default: Date.now, },
    fechaActualizar: { type : Date, default: null, },
    fechaEliminar: { type : Date, default: null, },
})