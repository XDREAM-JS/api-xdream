import { PartialType } from '@nestjs/mapped-types';
import { OmitType } from "@nestjs/swagger";
import { CreateInstituacionDto } from './create-institucion.dto';

export class EditInstitucionDto extends PartialType(OmitType(CreateInstituacionDto, ['password', 'imgLogo', 'imgPortada'] as const)){ }