import { Schema } from 'mongoose';

export const usuarioSchema = new Schema({
    nombres :String,
    apellidos :String,
    genero :String,
    departamento :String,
    correo :String,
    contraseña :String,
})