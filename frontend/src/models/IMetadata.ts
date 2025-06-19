export interface IMetadata {
  version?: string,
  tags?:string[],
  custom_fields? : Record<string, unknown>
}