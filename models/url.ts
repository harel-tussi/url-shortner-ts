import { Schema, model, Document } from "mongoose";
import { IUrl } from "../types/url";
import { nanoid } from "nanoid";

const UrlSchema: Schema = new Schema({
  url: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    default: nanoid(6),
  },
});

type UrlType = IUrl & Document;

const UrlModel = model<UrlType>("Url", UrlSchema);

export { UrlModel };
