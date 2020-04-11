import clientUtils from 'apis/clientUtils';

describe('csrfToken()', () => {
  it('returns csrf token that is attached to DOM', () => {
    global.document.querySelector = jest.fn().mockReturnValue({ content: 'CSRF-TOKEN'});
    expect(clientUtils.csrfToken()).toBe('CSRF-TOKEN');
  });
});