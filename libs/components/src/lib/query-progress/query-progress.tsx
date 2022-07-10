import { CircularProgress } from '@mui/material';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { QueryError } from '@august/components';
import React from 'react';

/* eslint-disable-next-line */
export interface QueryProgressProps<D> {
  query: {
    isLoading: boolean;
    isError: boolean;
    data?: D;
    error?: FetchBaseQueryError | SerializedError;
  };
  children: React.ReactElement;
}

export function QueryProgress<D>({ query, children }: QueryProgressProps<D>) {
  if (query.isLoading) return <CircularProgress />;
  if (query.error) return <QueryError error={query.error as FetchBaseQueryError} />;
  return children;
}

export default QueryProgress as React.FC;
