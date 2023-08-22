import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CampersModule } from './campers/campers.module';

@Module({
  imports: [CampersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
