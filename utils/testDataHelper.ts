///// <reference types="node" />
import { faker } from '@faker-js/faker';
import { promises as fs } from 'fs';
import path from 'path';

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

//  Adjust path to your folder structure
const FILE_PATH = path.resolve(process.cwd(), 'testData', 'registrationData.json');

export function generateUser(): User {
    const password = faker.internet.password({ length: 10 });

    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: `user_${Date.now()}@test.com`,
        password
    };
}

// Save user to JSON file
export async function saveUser(user: User): Promise<void> {
    try {
        let users: User[] = [];

        // Read existing file if available
        try {
            const data = await fs.readFile(FILE_PATH, 'utf-8');
            users = JSON.parse(data);

        } catch {
            // File doesn't exist yet → ignore
        }

        users.push(user);

        await fs.writeFile(FILE_PATH, JSON.stringify(users, null, 2), 'utf-8');

    } catch (error) {
        console.error('Error saving user data:', error);
        throw error;
    }
}
//clear users
export async function clearUsers(): Promise<void> {
    try {
        await fs.writeFile(FILE_PATH, JSON.stringify([], null, 2), 'utf-8');
    } catch (error) {
        console.error('Error clearing user data:', error);
        throw error;
    }
}