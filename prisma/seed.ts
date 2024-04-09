import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: 'b7ea61f3-36c6-41bd-bd9d-c8ac9582d750',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento p/ devs apaixonados(as) por código!',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})
