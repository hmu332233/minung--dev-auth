const modUsers = require(`${global.__path}/models/users`);

const { UnauthorizedError } = require(`${global.__path}/utils/error`);
const serAuth = require('./index');

describe('verifyUserAndReturnToken', () => {
  test('해당하는 유저가 없으면 UnauthorizedError', async () => {
    jest.spyOn(modUsers, 'findOne').mockImplementation(() => null);

    await expect(serAuth.verifyUserAndReturnToken({})).rejects.toBeInstanceOf(
      UnauthorizedError
    );
  });
});
