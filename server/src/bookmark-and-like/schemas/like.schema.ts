import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema()
export class Like {
   @Prop({ type: Types.ObjectId, ref: 'auth', required: true })
   userId: Types.ObjectId;

   @Prop({ type: [{ movieId: { type: String }, createdAt: { type: Date, default: Date.now } }] })
   likedMovies: { movieId: string; createdAt: Date }[];

   @Prop({ type: Date, default: Date.now })
   createdAt: Date;
}

export type LikeDocument = HydratedDocument<Like>;
export const likeMoviesSchema = SchemaFactory.createForClass(Like).index({ userId: 1 });
