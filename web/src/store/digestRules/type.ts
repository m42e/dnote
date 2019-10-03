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

import { DigestRuleData } from 'jslib/operations/types';
import { RemoteData } from '../types';

export type DigestRulesState = RemoteData<DigestRuleData[]>;

export const RECEIVE = 'digestRules/RECEIVE';
export const RECEIVE_ERROR = 'digestRules/RECEIVE_ERROR';
export const ADD = 'digestRules/ADD';
export const REMOVE = 'digestRules/REMOVE';
export const START_FETCHING = 'digestRules/START_FETCHING';
export const FINISH_FETCHING = 'digestRules/FINISH_FETCHING';

export interface ReceiveDigestRulesAction {
  type: typeof RECEIVE;
  data: {
    digestRules: DigestRuleData[];
  };
}

export interface ReceiveDigestRulesErrorAction {
  type: typeof RECEIVE_ERROR;
  data: {
    err: string;
  };
}

export interface StartFetchingDigestRulesAction {
  type: typeof START_FETCHING;
}

export interface FinishFetchingDigestRulesAction {
  type: typeof FINISH_FETCHING;
}

export interface AddDigestRuleAction {
  type: typeof ADD;
  data: {
    digestRule: DigestRuleData;
  };
}

export interface RemoveDigestRuleAction {
  type: typeof REMOVE;
  data: {
    uuid: string;
  };
}

export type DigestRulesActionType =
  | ReceiveDigestRulesAction
  | ReceiveDigestRulesErrorAction
  | StartFetchingDigestRulesAction
  | FinishFetchingDigestRulesAction
  | AddDigestRuleAction
  | RemoveDigestRuleAction;
