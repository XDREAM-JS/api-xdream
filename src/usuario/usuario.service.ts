import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsuarioDto, EditUsuarioDto } from './dtos';
import { Usuario } from './interfaces';

@Injectable()
export class UsuarioService {

    constructor(@InjectModel('usuario') private readonly usuarioModel:Model<Usuario>){}

    async getUsuarios():Promise<Usuario[]>{
        return await this.usuarioModel.find();
    }

    async getUsuario(idUsuario:string):Promise<Usuario>{
        return await this.usuarioModel.findById(idUsuario);
    }

    async createUsuario(usuario:CreateUsuarioDto):Promise<Usuario>{
        // crea el objeto para guardar
        const user = new this.usuarioModel(usuario);
        return await user.save()
    }

    async editUsuario(idUsuario:string, usuario:EditUsuarioDto):Promise<Usuario>{
        // crea el objeto para guardar
        const user = new this.usuarioModel(usuario);
        return await this.usuarioModel.updateOne({_id:idUsuario}, 
            {
                nombres: user.nombres, 
                apellidos: user.apellidos, 
                correo:user.correo, 
                departamento: user.departamento,
                genero: user.genero,
                rol:user.rol,
                password:user.password,
                fechaActualizar : new Date()
            });
    }

    async deleteUsuario(idUsuario:string):Promise<any>{
        return await this.usuarioModel.updateOne({_id:idUsuario}, {fechaEliminar: new Date()});
    }
}
