import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const NotificationSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: String,
  number: String,
  email: String,
});

@ObjectType()
export class Person extends Document {
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  number: string;

  @Field()
  email: string;
}