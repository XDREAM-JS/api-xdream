import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from 'src/interfaces';
import { CreateUsuarioDto, EditUsuarioDto } from './dtos';


@Injectable()
export class UsuarioService {

    constructor(@InjectModel('usuario') private readonly usuarioModel:Model<Usuario>){}

    async getUsuarios():Promise<Usuario[]>{
        return await this.usuarioModel.find();
    }

    async getUsuario(id:string):Promise<Usuario>{
        return await this.usuarioModel.findById(id);
    }

    async createUsuario(dto:CreateUsuarioDto):Promise<Usuario>{
        // crea el objeto para guardar
        const user = new this.usuarioModel(dto);
        return await user.save()
    }

    async editUsuario(idUsuario:string, dto:EditUsuarioDto):Promise<Usuario>{
        // crea el objeto para guardar
        const user = new this.usuarioModel(dto);
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

    async deleteUsuario(id:string):Promise<any>{
        return await this.usuarioModel.updateOne({_id:id}, {fechaEliminar: new Date()});
    }
}
