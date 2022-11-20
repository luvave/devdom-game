// This type is based on DBPEDIA_MOST_RELATED_ENTITY_SPARQL query
export interface MostRelatedEntity {
  abs: {
    language: string;
    value: string;
  }
  count: {
    value: number;
  }
  entity: {
    value: string;
  }
  image: {
    value: string;
  }
}
