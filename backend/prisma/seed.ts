import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const johnDoe = await prisma.patient.create({
    data: {
      email: 'mdeoliveira.m1999@gmail.com',
      name: 'John Doe',
      address: 'John Doe House 123',
      phone_number: 1,
      photo_path: 'path/to/photo',
    },
  });
  console.log({ johnDoe });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
