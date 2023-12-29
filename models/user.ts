import { BeforeCreate, BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';

import { Task } from './task';
import { UserTask } from './usertask';

@Table
export class User extends Model<User> {
  @Column({ allowNull: false, unique: true })
  email: string;

  @Column({ allowNull: false })
  password: string;

  @Column({ allowNull: true })
  role: string;

  @Column({ allowNull: false })
  createdAt: Date;

  @Column({ allowNull: false })
  updatedAt: Date;

  @BelongsToMany(() => Task, () => UserTask)
  tasks: Task[];

  @BeforeCreate
  static async hashPassword(user: User) {
    user.password = await bcrypt.hash(
      user.password,
      Number(process.env.SALT_ROUNDS),
    );
  }
}
