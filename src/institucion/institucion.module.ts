import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InstituacionSchema } from 'src/schemas';
import { InstitucionController } from './institucion.controller';
import { InstitucionService } from './institucion.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:'institucion', schema:InstituacionSchema}
    ])
  ],
  controllers: [InstitucionController],
  providers: [InstitucionService]
})
export class InstitucionModule {}
