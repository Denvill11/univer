import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';

import { Task } from './task';
import { User } from './user';

@Table
export class UserTask extends Model {
  @ForeignKey(() => Task)
  @Column
  taskId: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => Task)
  task: Task;

  @BelongsTo(() => User)
  user: User;

  @Column({
    defaultValue: 3,
  })
  status: number;

  @Column({ allowNull: false })
  createdAt: Date;

  @Column({ allowNull: false })
  updatedAt: Date;
}