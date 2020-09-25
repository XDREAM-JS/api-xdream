import { IsEmail, IsEnum, IsString } from "class-validator";
import { EnumToString } from "src/helpers/enum.ToString";
import { Rol } from "../enums";
export class CreateUsuarioDto{
        @IsString() nombres :string;
        @IsString() apellidos :string;
        @IsString() genero :string;
        @IsString() departamento :string;
        @IsString() @IsEmail() correo :string;
        @IsString() password :string;
        @IsEnum(Rol, {message: `El rol es invalido, las opciones correctas son '${EnumToString(Rol)}'`}) rol :Rol;
}