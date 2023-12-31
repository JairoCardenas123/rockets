import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CampersModule } from './campers/campers.module';
import { AstronautasModule } from './astronautas/astronautas.module';

@Module({
  imports: [CampersModule, MongooseModule.forRoot('mongodb+srv://astronautasUser:12345@clusterastronautas.gso1udw.mongodb.net/astronautasDB'), AstronautasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
