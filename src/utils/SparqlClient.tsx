import ParsingClient from 'sparql-http-client/ParsingClient';
import { DBPEDIA_SPARQL_ENDPOINT } from '../constants/sparql';

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
