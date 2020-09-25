import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsuarioDto, EditUsuarioDto } from './dtos';
import { Usuario } from './interfaces';

@Injectable()
export class UsuarioService {

    constructor(@InjectModel('usuario') private readonly usuarioModel:Model<Usuario>){}

    async getUsuarios(){
        return await this.usuarioModel.find();
    }

    async getUsuario(idUsuario:string){
        return await this.usuarioModel.findById(idUsuario);
    }

    async createUsuario(usuario:CreateUsuarioDto){
        const result = new this.usuarioModel(usuario);
        console.log(result);
        return await result.save()
    }

    editUsuario(idUsuario:string, usuario:EditUsuarioDto){
        return {ok:'editUsuario'}
    }

    deleteUsuario(idUsuario:string){
        return {ok:'deleteUsuario'}
    }
}
