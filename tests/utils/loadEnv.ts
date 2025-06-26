// tests/utils/loadEnv.ts

import * as dotenv from 'dotenv';
import * as path from 'path';

// ⚠️ Elimina la lógica de múltiples entornos
dotenv.config({ path: path.resolve(__dirname, `../../.env`) });

console.log(`✅ Using default .env file`);