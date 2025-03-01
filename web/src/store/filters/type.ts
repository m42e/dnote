/* Copyright (C) 2019 Monomax Software Pty Ltd
 *
 * This file is part of Dnote.
 *
 * Dnote is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Dnote is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Dnote.  If not, see <https://www.gnu.org/licenses/>.
 */

export interface QueryState {
  q: string;
  book: string[];
}

export interface FiltersState {
  queries: QueryState;
  page: number;
}

export const UPDATE_PAGE = 'filters/UDPATE_PAGE';
export const UPDATE_QUERY = 'filters/UPDATE_QUERY';
export const RESET = 'filters/RESET';

type ValidQueries = 'q' | 'book';

export interface UpdateQueryAction {
  type: typeof UPDATE_QUERY;
  data: {
    key: ValidQueries;
    value: string;
  };
}

export interface UpdatePageAction {
  type: typeof UPDATE_PAGE;
  data: {
    value: number;
  };
}

export interface ResetAction {
  type: typeof RESET;
}

export type FilterActionType =
  | UpdateQueryAction
  | UpdatePageAction
  | ResetAction;
