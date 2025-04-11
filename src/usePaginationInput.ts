// src/usePaginationInput.ts
import { ChangeEvent, useCallback } from "react";
import { PaginationInputProps } from "./interface";

export const usePaginationInput = ({pagination,setPagination}: PaginationInputProps) => {
  const handlers: Record<string, (value: string) => void> = {
    limit: (value) => setPagination({...pagination,limit: +value}),
    skip: (value) => setPagination({...pagination,limit: +value}),
  };

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const handler = handlers[e.target.id];
      if (handler) {
        handler(e.target.value);
      }
    },
    [handlers]
  );

  return { handleInputChange };
};