import { expect, test } from 'vitest'
import { saveUserToDatabase } from './app'

test('app - check if user saved in database', () => {
    const userObject = {
        name: 'Gladson Brito',
        id: '123',
        email: 'gladsonbrito@gmail.com',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date()
    }
    const user = saveUserToDatabase(userObject)
    expect(user).toEqual(userObject)
})