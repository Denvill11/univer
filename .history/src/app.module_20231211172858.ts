import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
