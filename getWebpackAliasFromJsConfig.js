const path = require('path');
const { compilerOptions } = require(`${process.cwd()}/jsconfig.json`);

function getWebpackAliasFromJsConfig(
  baseUrl = compilerOptions?.baseUrl ?? '.',
  paths = compilerOptions?.paths
) {
  if (!paths) {
    throw new Error('jsconfig.compilerOptions.paths 값이 존재하지 않습니다.');
  }

  const config = Object.entries(paths).map(([key, value]) => [
    key,
    value.map((url) => path.resolve(process.cwd(), baseUrl, url)),
  ]);

  return Object.fromEntries(config);
}

module.exports = getWebpackAliasFromJsConfig;