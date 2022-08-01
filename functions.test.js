const functions = require('./functions')

// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())

// const initDatabase = () => console.log('databse initialized')
// const closeDatabase = () => console.log('database closed')

const nameCheck = () => console.log('checking name...')

describe('Checking names', () => {
    beforeEach(() => nameCheck());

    test('User Name is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff')
    })

    test('User Name is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen')
    })
})



test('Add to 2 + 2 = 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
})

test('User should be Brad Traversy Object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
})

test('Admin should be in usernames', () => {
    usernames = ['John', 'Karen', 'Admin']
    expect(usernames).toContain('Admin')
})

//async
test('user fetched should be named Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
})