import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { InstitucionModule } from './institucion/institucion.module';

@Module({
  imports: [
    UsuarioModule,
    MongooseModule.forRoot('mongodb://localhost/xdreams'),
    InstitucionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
