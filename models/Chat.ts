import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IChat extends Document {
  participants: Types.ObjectId[];
  lastMessage?: Types.ObjectId; // Reference to the last message in the chat
  lastMessageAt?: Date; // Timestamp of the last message for sorting
  createdAt: Date;
  updatedAt: Date;
}

const ChatSchema: Schema = new Schema(
  {
    participants: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    }],
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: 'Message',
    },
    lastMessageAt: {
      type: Date,
      index: true, // Index for sorting chats by recent activity
    }
  },
  {
    timestamps: true,
  }
);

// Index for finding chats involving specific users
ChatSchema.index({ participants: 1 });

export default mongoose.models.Chat || mongoose.model<IChat>('Chat', ChatSchema); 