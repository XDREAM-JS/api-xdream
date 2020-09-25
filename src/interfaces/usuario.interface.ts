import { Document } from 'mongoose';

export interface Usuario extends Document{
    id?:string;
    password :string;
    nombres :string;
    apellidos :string;
    genero :string;
    departamento :string;
    correo :string;
    rol:string;
    fechaActualizar:Date;
    fechaEliminar:Date;
}