import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Auth {
   @Prop()
   name: string;

   @Prop({ type: String, required: true, unique: true })
   email: string;

   @Prop({
      type: String,
      default:
         'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
   })
   avatar: string;

   @Prop({ type: String, required: true })
   password: string;

   @Prop({ type: Date, default: Date.now })
   createdAt: Date;
}

export type AuthDocument = HydratedDocument<Auth>;
export const AuthSchema = SchemaFactory.createForClass(Auth).index({ email: 1 });
