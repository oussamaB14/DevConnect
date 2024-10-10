import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PostType } from '../enums/postType.enum';
@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  content: string;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'author_id' })
  author: User;
  @Column()
  @Column({ nullable: true, default: 0 })
  @Column({ nullable: true, default: '[]' })
  likes: string;
  @Column({ nullable: true, default: '[]' })
  shares: string;
  @Column({ nullable: true, default: '[]' })
  media: string;
  @Column({ nullable: true })
  linkUrl: string;
  @Column({
    type: 'enum',
    enum: PostType,
    default: PostType.POST,
    nullable: false,
  })
  type: PostType;
}
