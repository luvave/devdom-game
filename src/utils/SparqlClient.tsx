import ParsingClient from 'sparql-http-client/ParsingClient';
import {
  DBPEDIA_MOST_RELATED_ENTITY_SPARQL,
  DBPEDIA_SINGLE_ENTITY_SPARQL,
  DBPEDIA_SPARQL_ENDPOINT
} from '../constants/sparql';
import { MostRelatedEntity } from '../types/relatedEntities';

const client: ParsingClient = new ParsingClient({
  endpointUrl: DBPEDIA_SPARQL_ENDPOINT,
});

const exampleQuery = 'SELECT *\n'
  + 'WHERE\n'
  + '{\n'
  + '  ?athlete  rdfs:label      "Cristiano Ronaldo"@en ;\n'
  + '            dbo:number      ?number ;\n'
  + '            dbo:birthPlace  ?place .\n'
  + '}';

export const testConnection = async () => {
  const result = await client.query.select(exampleQuery);
  console.log(result);
  return result;
};

export const getMostRelatedEntity = async (resource: string) => {
  const result = await client.query.select(DBPEDIA_MOST_RELATED_ENTITY_SPARQL(resource));
  if (Array.isArray(result) && result.length > 0) {
    // TODO: Fix type
    return result[0] as unknown as MostRelatedEntity;
  }
  throw new Error('Invalid data');
};

export const getSingleEntity = async (resource: string) => {
  const result = await client.query.select(DBPEDIA_SINGLE_ENTITY_SPARQL(resource));
  if (Array.isArray(result) && result.length > 0) {
    // TODO: Fix type
    return result[0] as unknown as MostRelatedEntity;
  }
  throw new Error('Invalid data');
};
