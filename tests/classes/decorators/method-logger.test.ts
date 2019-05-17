import { TestClass } from '../test-class';

describe('Decorator', () => {
  let testClass: TestClass;
  beforeAll(() => {
    testClass = new TestClass();
  });

  it('Should log', () => {
    return expect(testClass.logMe()).toEqual('logged!');
  });

  it('Should log with custom params', () => {
    expect(testClass.logMeCustom()).toEqual('logged custom!');
  });

  it('Should log async', () => {
    expect(testClass.logMeAsync()).resolves.toEqual('logged async!');
  });

  it('Should throw and log', () => {
    expect(testClass.throwMe).toThrowError('error');
  });

  it('Should throw and log async', async () => {
    try {
      await testClass.throwAsync();
    } catch (error) {
      expect(error.message).toBe('error');
    }
  });
});
