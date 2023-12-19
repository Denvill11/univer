import { BeforeCreate, Column, Model, Table } from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';

@Table
export class User extends Model<User> {
  @Column({ allowNull: false, unique: true })
  email: string;

  @Column({ allowNull: false })
  password: string;

  @Column({ allowNull: true })
  avatarPath: string;

  @Column({ allowNull: false })
  createdAt: Date;

  @Column({ allowNull: false })
  updatedAt: Date;

  @BeforeCreate
  static async hashPassword(user: User) {
    user.password = await bcrypt.hash(
      user.password,
      Number(process.env.SALT_ROUNDS),
    );
  }
}
