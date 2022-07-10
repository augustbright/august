import { Alert, AlertTitle } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

/* eslint-disable-next-line */
export interface QueryErrorProps {
  error: FetchBaseQueryError;
}

export function QueryError({error}: QueryErrorProps) {
  return (
    <Alert severity="error">
      <AlertTitle>Failed to load data</AlertTitle>
      {error.status} {JSON.stringify(error.data)}
    </Alert>
  );
}

export default QueryError;
