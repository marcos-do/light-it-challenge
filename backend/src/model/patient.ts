import { IsEmail, IsNotEmpty } from 'class-validator';

export class PatientDTO {
    name: string;
    @IsEmail()
    email: string;
    address: string;
    phoneNumber: number;
}