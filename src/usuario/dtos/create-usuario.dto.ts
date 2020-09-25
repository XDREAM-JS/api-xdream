import { IsEmail, IsString } from "class-validator";
export class CreateUsuarioDto{
        @IsString() nombres :string;
        @IsString() apellidos :string;
        @IsString() genero :string;
        @IsString() departamento :string;
        @IsString() @IsEmail() correo :string;
        @IsString() password :string;
}