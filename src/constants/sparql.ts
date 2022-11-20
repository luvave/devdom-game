export const DBPEDIA_SPARQL_ENDPOINT = 'https://dbpedia.org/sparql';
export const DBPEDIA_RESOURCE_URL_PATH = 'http://dbpedia.org/resource/';

export const getNameFromUri = (uri: string): string => uri.replace(DBPEDIA_RESOURCE_URL_PATH, '');

export const escapeRegex = (str: string) => str.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');

export const DBPEDIA_MOST_RELATED_ENTITY_SPARQL = (resource: string) => `
      PREFIX dbr: <http://dbpedia.org/resource/>
      PREFIX dbo: <http://dbpedia.org/ontology/>\
      PREFIX dbp: <http://dbpedia.org/property/>
      SELECT ?entity (COUNT(*) AS ?count) ?image ?abs WHERE {
      
      ?b dbo:wikiPageWikiLink dbr:${escapeRegex(resource)} .
      ?b dbo:wikiPageWikiLink ?entity .
      dbr:${escapeRegex(resource)} ?property ?entity .
      ?entity dbo:thumbnail ?image; dbo:abstract ?abs .
      
      FILTER(?property != dbo:wikiPageWikiLink)
      FILTER(langMatches(lang(?abs),"en"))
      
      } GROUP BY ?entity ?image ?abs ORDER BY desc(?count) LIMIT 4
`;

export const DBPEDIA_SINGLE_ENTITY_SPARQL = (resource: string) => `
      PREFIX dbr: <http://dbpedia.org/resource/>
      PREFIX dbo: <http://dbpedia.org/ontology/>
      
      SELECT  dbr:${escapeRegex(resource)} AS ?entity ?image ?abs WHERE {
       dbr:${escapeRegex(resource)} dbo:thumbnail ?image; dbo:abstract ?abs .
      FILTER(langMatches(lang(?abs),"en"))
      } LIMIT 1
`;
