import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema()
export class Bookmark {
   @Prop({ type: Types.ObjectId, ref: 'auth', required: true })
   userId: Types.ObjectId;

   @Prop({ type: [{ movieId: { type: String }, createdAt: { type: Date, default: Date.now } }] })
   bookmarkMovies: { movieId: string; createdAt: Date }[];

   @Prop({ type: Date, default: Date.now })
   createdAt: Date;
}

export type BookmarkDocument = HydratedDocument<Bookmark>;
export const bookmarkSchema = SchemaFactory.createForClass(Bookmark).index({ userId: 1 });
