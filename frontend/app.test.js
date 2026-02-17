const formatName = require('./app');
test('formats name correctly', () => {
    expect(formatName('User')).toBe('Hello, User');
});