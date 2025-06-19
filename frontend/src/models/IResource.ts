import type { IMetadata } from "./IMetadata.ts";
import type { ICreator } from "./ICreator.ts";

export interface IResource {
  id : number,
  title: string,
  description?: string,
  resource_type: string,
  path: string,
  mime_type: string,
  size: number,
  is_public: boolean,
  // creator: ICreator,
  // parent_id?: number,
  metadata: IMetadata,
  // created_at: Date,
  // updated_at: Date,
}