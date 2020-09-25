import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUsuarioDto, EditUsuarioDto } from './dtos';
import { Usuario } from './interfaces';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly _usuarioService:UsuarioService){}

    @Get()
    getUsuarios():Promise<Usuario[]>{
        return this._usuarioService.getUsuarios();
    }

    @Get(':id')
    getUsuario(@Param('id') id:string){
        return this._usuarioService.getUsuario(id)
    }

    @Post()
    createUsuario(@Body() dto:CreateUsuarioDto):Promise<Usuario>{
        console.log(dto);
        return this._usuarioService.createUsuario(dto);
    }

    @Put(':id')
    editUsuario(@Param('id') id:string, @Body() dto:EditUsuarioDto){
        return this._usuarioService.editUsuario(id, dto);
    }
    
    @Delete(':id')
    deleteUsuario(@Param('id') id:string){
        return this._usuarioService.deleteUsuario(id);
    }

}
