import { MetadataAttributes } from "./metadata-attributes";

export interface Metadata {
  name: string,
  description: string,
  image: string,
  attributes: MetadataAttributes[]
}
