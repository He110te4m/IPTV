import type { Config } from '@netlify/functions'

export default async () => {
  await import('../../src/main')
}

export const config: Config = {
  schedule: '@hourly',
}
