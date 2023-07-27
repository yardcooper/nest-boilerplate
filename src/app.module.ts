import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { AppConfigModule } from './config/app.config.module';

@Module({
  imports: [AppConfigModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
