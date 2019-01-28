import { parseFilePath } from '../../utils/file';

describe('parseFilePath method tests', () => {
  it('must return a parsed file path', () => {
    const filePath = '/Teste/Workspace/Services/Pathology/build/src/controllers/old-api';
    const parsedPath = parseFilePath(filePath);
    expect(parsedPath).toBe('src/controllers/old-api');
  });

  it('must return a non parsed file path', () => {
    const filePath = '/Teste/Workspace/Services/Pathology';
    const parsedPath = parseFilePath(filePath);
    expect(parsedPath).toBe(filePath);
  });
});
