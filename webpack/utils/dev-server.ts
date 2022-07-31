const defaultPort = 3000;
const devServerHost = 'localhost';
export const devServerUrl = `http://${devServerHost}:${defaultPort}/`;

export const devServerConfig = {
  hot: true,
  port: defaultPort,
  host: devServerHost,
  historyApiFallback: true,
};
