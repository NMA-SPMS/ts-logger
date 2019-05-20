import { methodLogger } from '../../src/classes/decorators/method-logger';
export class TestClass {
  @methodLogger(__filename)
  public logMeAsync(): any {
    return new Promise((resolve, reject) => {
      resolve('logged async!');
    });
  }
  @methodLogger(__filename)
  public logMe(): string {
    return 'logged!';
  }

  @methodLogger(__filename)
  public throwMe(): any {
    throw new Error('error');
  }

  @methodLogger(__filename, 'This is a custom message')
  public logMeCustom(): any {
    return 'logged custom!';
  }

  @methodLogger(__filename)
  public async throwAsync(): Promise<any> {
    return new Promise((resolve, reject) => {
      throw new Error('error');
    });
  }
}
