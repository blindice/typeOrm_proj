import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'tbl_m_status', synchronize: false })
export class Status {
  @PrimaryGeneratedColumn()
  fld_id: number

  @Column()
  fld_statusCode: string

  @Column()
  fld_statusName: string
}
