import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Institucion } from 'src/interfaces/institucion.interface';
import { CreateInstituacionDto, EditInstitucionDto } from './dtos';
import { InstitucionService } from './institucion.service';

@Controller('institucion')
export class InstitucionController {
    
    constructor(private readonly _institucionService:InstitucionService){}

    @Get()
    getUsuarios():Promise<Institucion[]>{
        return this._institucionService.getInstituciones();
    }

    @Get(':id')
    getUsuario(@Param('id') id:string):Promise<Institucion>{
        return this._institucionService.getInstitucion(id)
    }

    @Post()
    createUsuario(@Body() dto:CreateInstituacionDto):Promise<Institucion>{
        return this._institucionService.createUsuario(dto);
    }

    @Put(':id')
    editUsuario(@Param('id') id:string, @Body() dto:EditInstitucionDto){
        return this._institucionService.editInstitucion(id, dto);
    }
    
    @Delete(':id')
    deleteUsuario(@Param('id') id:string){
        return this._institucionService.deleteInstitucion(id);
    }
}
