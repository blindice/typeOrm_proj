import { Express } from 'express'
import { AppDataSource } from './data-source'
import helmet from 'helmet'
import * as bodyParser from 'body-parser'
import { InversifyExpressServer, getRouteInfo } from 'inversify-express-utils'
import container from '../containerSetup'
class App {
  server: InversifyExpressServer
  constructor(private app: Express) {
    this.server = new InversifyExpressServer(container, null, null, this.app)
  }

  async InitializeDatabase() {
    try {
      await AppDataSource.initialize()
      console.log('Database Connected!')
    } catch (err) {}
  }

  async InitializeMiddleware() {
    try {
      this.server.setConfig((app) => {
        app.use(helmet())
        app.use(
          bodyParser.urlencoded({
            extended: true,
          }),
        )
        this.app.use(bodyParser.json())
      })
      console.log('Middlewares Initialized')
    } catch (err) {}
  }

  async Initialize() {
    this.server.build().listen()
  }
}
