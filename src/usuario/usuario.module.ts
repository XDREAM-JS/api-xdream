import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InstituacionSchema, UsuarioSchema } from 'src/schemas';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:'usuario', schema:UsuarioSchema},
      {name:'institucion', schema:InstituacionSchema}
    ])
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService]
})
export class UsuarioModule {}
