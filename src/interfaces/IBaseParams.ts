export type IGetParams<
  TParams = { id: string },
  TSearchParams = Record<string, string | string[] | undefined>,
> = {
  params: Promise<TParams>;
  searchParams: Promise<TSearchParams>;
};

export type IBaseParams = {
  page?: number | undefined;
  perPage?: number | undefined;
  search?: string | undefined;
};
