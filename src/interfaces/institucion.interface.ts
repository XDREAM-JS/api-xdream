import { Document } from 'mongoose';
export interface Institucion extends Document{
    id?:string;
    nombres :string;
    sigla:string;
    pais:string;
    ciudad:string;
    tipoInstitucion:string;
    telefono:string;
    direccion:string;
    direccionWeb:string;
    correo:string;
    password:string;
    imgPortada:string;
    imgLogo:string;
    fechaActualizar:Date;
    fechaEliminar:Date;
}