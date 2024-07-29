import { Injectable } from '@nestjs/common';
import { Patient, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaService) {}
  createPatient(data: Prisma.PatientCreateInput): Promise<Patient> {
    return this.prisma.patient.create({ data });
  }
}
