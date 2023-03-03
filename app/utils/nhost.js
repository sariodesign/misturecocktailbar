import { NhostClient } from '@nhost/nhost-js'

export const nhost = new NhostClient({
  subdomain: import.meta.env.VITE_SUBDOMAIN,
  region: import.meta.env.VITE_REGION
});