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
import { PatientService } from 'src/services/patientService';

@Controller('patient')
export class PatientController {
  constructor(private readonly service: PatientService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async postPatient(
    @Body() createDTO: PatientDTO,
    // @UploadedFile(
    //   new ParseFilePipe({
    //     validators: [
    //       new FileTypeValidator({ fileType: 'image/jpeg, image/png' }),
    //     ],
    //   }),
    // )
    // file: Express.Multer.File,
  ): Promise<Patient> {
    const { name, email, phoneNumber, address } = createDTO;
    const createdPatient = await this.service.createPatient({
      name,
      email,
      address,
      phone_number: phoneNumber,
      photo_path: 'path/to/photo',
    });
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
    const patientsList = await this.service.getAllPatients();
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
