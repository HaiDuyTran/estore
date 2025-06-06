import { prisma } from './prisma';
import sampleData from './sample-data';
import { hash } from '@/lib/encrypt';


async function main() {
  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();
 
  const newProducts = [];
for (const product of sampleData.products) {
  newProducts.push({
    ...product,
    description: product.description || '', // add a default value if description is null
    embedding: {},
  });
}
  await prisma.product.createMany({ data: newProducts });
  const users = [];
  for (let i = 0; i < sampleData.users.length; i++) {
    console.log(sampleData.users[i].password);
    users.push({
      ...sampleData.users[i],
      password: await hash(sampleData.users[i].password),
    });
    console.log(
      sampleData.users[i].password,
      await hash(sampleData.users[i].password)
    );
  }
  await prisma.user.createMany({ data: users });

  console.log('Database seeded successfully!');
}

main();
