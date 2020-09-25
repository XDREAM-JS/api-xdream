import { PartialType } from '@nestjs/mapped-types';
import { OmitType } from "@nestjs/swagger";
import { CreateUsuarioDto } from "./create-usuario.dto";

export class EditUsuarioDto extends PartialType(OmitType(CreateUsuarioDto, ['password'] as const)){ }