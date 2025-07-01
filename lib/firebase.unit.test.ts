jest.mock('firebase/app', () => ({
  getApps: jest.fn(() => []),
  getApp: jest.fn(),
  initializeApp: jest.fn(() => ({})),
}))
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({})),
}))
jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(() => ({})),
}))

import { auth, db } from './firebase'

describe('Firebase initialization', () => {
  it('should export auth and db objects', () => {
    expect(auth).toBeDefined()
    expect(db).toBeDefined()
  })
})
