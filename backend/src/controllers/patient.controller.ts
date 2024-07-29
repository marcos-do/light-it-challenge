import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { Patient, PatientDTO } from 'src/model/patient';
import { EmailService } from 'src/services/email.service';
import { PatientService } from 'src/services/patient.service';

@Controller('patient')
export class PatientController {
  constructor(
    private readonly patientService: PatientService,
    private readonly emailService: EmailService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async postPatient(
    @Body() createDTO: PatientDTO,
  ): Promise<Patient> {
    const { name, email, phoneNumber, address } = createDTO;
    const createdPatient = await this.patientService.createPatient({
      name,
      email,
      address,
      phone_number: phoneNumber,
      photo_path: 'path/to/photo',
    });
    this.emailService.sendMail(
      createdPatient.email,
      JSON.stringify(createdPatient),
    );
    return {
      name: createdPatient.name,
      email: createdPatient.email,
      address: createdPatient.address,
      phoneNumber: createdPatient.phone_number,
      photoPath: createdPatient.photo_path,
    };
  }

  @Get()
  async getAllPatients(): Promise<Patient[]> {
    const patientsList = await this.patientService.getAllPatients();
    return patientsList.map(
      ({ name, address, email, phone_number, photo_path }) => ({
        name,
        address,
        email,
        phoneNumber: phone_number,
        photoPath: photo_path,
      }),
    );
  }
}
