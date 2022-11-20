import { DBPEDIA_RESOURCE_URL_PATH } from '../constants/sparql';

export const getNameFromUri = (uri: string): string => uri.replace(DBPEDIA_RESOURCE_URL_PATH, '');
