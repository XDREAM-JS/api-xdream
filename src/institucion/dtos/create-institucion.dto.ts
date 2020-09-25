import {IsEmail, IsNumber, IsString, IsUrl } from "class-validator";
export class CreateInstituacionDto{
        @IsString() nombres :string;
        @IsString() sigla:string;
        @IsString() pais:string;
        @IsString() ciudad:string;
        @IsString() tipoInstitucion:string;
        @IsNumber() telefono:string;
        @IsString() direccion:string;
        @IsString() @IsUrl() direccionWeb:string;
        @IsString() @IsEmail() correo:string;
        @IsString() password:string;
        @IsString() imgPortada:string;
        @IsString() imgLogo:string;
}