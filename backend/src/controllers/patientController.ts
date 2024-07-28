import {
  Body,
  Controller,
  FileTypeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { PatientDTO } from 'src/model/patient';

@Controller("patient")
export class PatientController {
  constructor() {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  postPatient(
    @Body() createDTO: PatientDTO,
    // @UploadedFile(
    //   new ParseFilePipe({
    //     validators: [
    //       new FileTypeValidator({ fileType: 'image/jpeg, image/png' }),
    //     ],
    //   }),
    // )
    // file: Express.Multer.File,
  ): PatientDTO {
    return createDTO;
  }
}
