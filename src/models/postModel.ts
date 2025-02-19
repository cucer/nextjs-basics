import mongoose, { Document, Schema } from 'mongoose';

interface IPost extends Document {
  title: string;
  body: string;
}

const postSchema: Schema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
});

const Post = mongoose.models.Post || mongoose.model<IPost>('Post', postSchema);

export default Post;
