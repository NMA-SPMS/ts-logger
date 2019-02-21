import { LogLevels } from '../../../src';
import { methodLogger } from '../../../src/classes/decorators/method-logger';

class MockClass {
  @methodLogger(__filename)
  public shouldLog(message: string) {
    if (message === 'throwMe') {
      throw new Error(message);
    }
    return message;
  }

  @methodLogger(__filename, 'customMessage')
  public shouldLogCustom(message: string) {
    if (message === 'throwMe') {
      throw new Error(message);
    }
    return message;
  }

  @methodLogger(__filename, 'this is a custom message', LogLevels.debug)
  public divide(dividend: number, divisor: number): number {
    if (divisor === 0) {
      throw new Error('Division by zero');
    } else {
      return dividend / divisor;
    }
  }
}
describe('MethodLogger decorator', () => {
  test('Should throw and log the caught error', () => {
    function shouldThrow() {
      new MockClass().divide(3, 0);
    }
    expect(shouldThrow).toThrow();
  });
  test('Should log normally', () => {
    expect(new MockClass().shouldLogCustom('logMe')).toBe('logMe');
  });
});
