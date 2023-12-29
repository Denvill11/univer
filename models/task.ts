import { Column, Table, Model, BelongsToMany } from 'sequelize-typescript';

import { UserTask } from './usertask';
import { User } from './user';

@Table
export class Task extends Model {
  @Column({ allowNull: false, unique: false })
  name : string;

  @Column({ allowNull: false, unique: false })
  content : string;

  @Column({ allowNull: false })
  createdAt: Date;

  @Column({ allowNull: false })
  updatedAt: Date;

  @BelongsToMany(() => User, () => UserTask)
  user: User[];
}