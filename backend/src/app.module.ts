import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientController } from './controllers/patient.controller';
import { PatientService } from './services/patient.service';
import { PrismaService } from './services/prisma.service';
import { EmailService } from './services/email.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, PatientController],
  providers: [AppService, PatientService, PrismaService, EmailService],
})
export class AppModule {}
