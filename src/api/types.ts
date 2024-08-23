export interface MetaDataPageAPI {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  previous_page_url: string | null;
}

/**
 * @description Essa interface é responsável por definir o formato de uma página de dados
 * @template Data - Tipo de dado que será retornado
 */
export interface PageAPI<Data> {
  data: Data[];
  meta: MetaDataPageAPI;
}
