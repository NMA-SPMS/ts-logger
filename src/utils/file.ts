export const parseFilePath = (filePath: string): string => {
  const parsedPath = filePath.match(/\/(build|lib|src)\/(.*)/);
  return parsedPath ? parsedPath[2] : filePath;
};
