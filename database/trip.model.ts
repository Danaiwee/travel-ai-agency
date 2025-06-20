import { Document, model, models, Schema } from "mongoose";

export interface ITrip {
  title: string;
  imageUrls: string[];
  days: number;
  city: string[];
  tags: string[];
  content: string;
}

export interface ITripDoc extends ITrip, Document {}

const tripSchema = new Schema(
  {
    title: { type: String, required: true },
    imageUrls: [{ type: String, required: true }],
    days: { type: Number, required: true },
    city: [{ type: String, required: true }],
    tags: [{ type: String, required: true }],
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Trip = models?.Trip || model<ITrip>("Trip", tripSchema);

export default Trip;
