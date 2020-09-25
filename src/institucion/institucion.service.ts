import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Institucion } from 'src/interfaces/institucion.interface';
import { CreateInstituacionDto, EditInstitucionDto } from './dtos';

@Injectable()
export class InstitucionService {

    constructor(@InjectModel('institucion') private readonly instituacionModel:Model<Institucion>){}

    async getInstituciones():Promise<Institucion[]>{
        return await this.instituacionModel.find();
    }

    async getInstitucion(id:string):Promise<Institucion>{
        return await this.instituacionModel.findById(id);
    }

    async createUsuario(dto:CreateInstituacionDto):Promise<Institucion>{
        // crea el objeto para guardar
        const user = new this.instituacionModel(dto);
        return await user.save()
    }

    async editInstitucion(id:string, dto:EditInstitucionDto):Promise<Institucion>{
        // crea el objeto para guardar
        const object = new this.instituacionModel(dto);
        return await this.instituacionModel.updateOne({_id:id}, 
            {
                nombres: object.nombres,
                fechaActualizar: new Date()
            });
    }

    async deleteInstitucion(id:string):Promise<any>{
        return await this.instituacionModel.updateOne({_id:id}, {fechaEliminar: new Date()});
    }
}
