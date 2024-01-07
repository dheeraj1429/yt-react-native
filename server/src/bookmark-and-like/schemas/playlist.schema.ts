import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema()
export class Playlist {
   @Prop({ type: Types.ObjectId, required: true, ref: 'auth' })
   userId: Types.ObjectId;

   @Prop({ type: String, required: true })
   playListName: string;

   @Prop({ type: [{ movieId: { type: String }, createdAt: { type: Date, default: Date.now } }] })
   movies: { movieId: string; createdAt: Date }[];

   @Prop({ type: Date, default: Date.now })
   createdAt: Date;
}

export type PlaylistDocument = HydratedDocument<Playlist>;
export const playlistSchema = SchemaFactory.createForClass(Playlist).index({ userId: 1, playListName: 1 });
