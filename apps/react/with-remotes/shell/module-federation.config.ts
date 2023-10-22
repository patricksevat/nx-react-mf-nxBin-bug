import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shell-with-remotes',
  remotes: ['remote1'],
};

export default config;
