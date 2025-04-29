import mongoose, { Schema, Document, Types } from 'mongoose';

// Interface for GeoJSON Point
interface IPoint {
  type: 'Point';
  coordinates: [number, number]; // [longitude, latitude]
}

export interface IVenue extends Document {
  name: string;
  address: string;
  location?: IPoint; // Optional GeoJSON location
  description?: string;
  amenities?: string[];
  openingHours?: string; // Simple text for now, could be more complex
  createdBy: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const VenueSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: false,
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: false,
      },
    },
    description: {
      type: String,
      trim: true,
    },
    amenities: [{
      type: String,
      trim: true,
    }],
    openingHours: {
      type: String,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create a 2dsphere index on the location field for geospatial queries
VenueSchema.index({ location: '2dsphere' });

export default mongoose.models.Venue || mongoose.model<IVenue>('Venue', VenueSchema); 