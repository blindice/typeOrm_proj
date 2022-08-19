import 'reflect-metadata'
import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: '172.16.53.149',
  username: 'sa',
  password: 'sqladmin',
  database: 'db_SQICS',
  logging: true,
  entities: ['src/entity/**/*.ts'],
  migrations: [],
  subscribers: [],
  options: { encrypt: false },
})
