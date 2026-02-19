import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

async function main() {
    console.log('Seeding database...')

    // Check if admin user exists
    const existingAdmin = await prisma.user.findUnique({
        where: { email: 'admin@codiq.com' },
    })

    if (!existingAdmin) {
        // Create default admin user
        const admin = await prisma.user.create({
            data: {
                email: 'admin@codiq.com',
                name: 'Admin User',
                password: 'admin123', // Plain text as per auth.ts implementation
                role: 'ADMIN',
            },
        })
        console.log(`Created admin user with id: ${admin.id}`)
    } else {
        console.log('Admin user already exists.')
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
