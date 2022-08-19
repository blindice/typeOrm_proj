import { AppDataSource } from './data-source'
import { Status } from './entity/Status'
import * as express from 'express'

AppDataSource.initialize()
  .then(async () => {
    const repo = AppDataSource.getRepository(Status)
    const statuses: Status[] = await repo.find()
    console.log(statuses)
  })
  .catch((error) => console.log(error))

process.on('unhandledRejection', (reason: Error | any) => {
  console.log(`Unhandled Rejection: ${reason.message || reason}`)

  throw new Error(reason.message || reason)
})
