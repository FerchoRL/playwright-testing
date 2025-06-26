// tests/utils/env.ts

import './loadEnv'; // Ya carga el .env único

function getEnvVariable(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`❌ Environment variable ${key} is missing`);
  return value;
}

export const STANDARD_USER = getEnvVariable('STANDARD_USER');
export const PASSWORD = getEnvVariable('PASSWORD');
export const BASE_URL = getEnvVariable('BASE_URL');
export const LOCKED_OUT_USER = getEnvVariable('LOCKED_OUT_USER');
