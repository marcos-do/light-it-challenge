import { IsEmail, IsNotEmpty } from 'class-validator';

export class PatientDTO {
  @IsNotEmpty()
  name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  phoneNumber: number;
}

export class Patient {
  name: string;
  email: string;
  address: string;
  phoneNumber: number;
  photoPath: string;
}

// {
    // "name": "Marcos",
    // "address": "H",
    // "email": "a@gmail.com",
    // "phoneNumber": 1
//     }
