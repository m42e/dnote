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

import {
  UPDATE_QUERY,
  UPDATE_PAGE,
  RESET,
  UpdateQueryAction,
  UpdatePageAction,
  ResetAction
} from './type';

export function updateQuery(key, value): UpdateQueryAction {
  return {
    type: UPDATE_QUERY,
    data: { key, value }
  };
}

export function updatePage(value): UpdatePageAction {
  return {
    type: UPDATE_PAGE,
    data: { value }
  };
}

export function resetFilters(): ResetAction {
  return {
    type: RESET
  };
}
