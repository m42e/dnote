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

import React, { useState, useRef } from 'react';
import classnames from 'classnames';

import ItemActions from '../../Common/ItemActions';
import DotsIcon from '../../Icons/Dots';
import ItemActionsStyles from '../../Common/ItemActions/ItemActions.scss';

interface Props {
  isActive: boolean;
}

const Actions: React.FunctionComponent<Props> = ({ isActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const optRefs = [useRef(null), useRef(null)];
  const options = [
    {
      name: 'edit',
      value: (
        <button
          ref={optRefs[0]}
          type="button"
          className={classnames(
            'button-no-ui button-stretch',
            ItemActionsStyles.action
          )}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Edit
        </button>
      )
    },
    {
      name: 'remove',
      value: (
        <button
          ref={optRefs[1]}
          type="button"
          className={classnames(
            'button-no-ui button-stretch',
            ItemActionsStyles.action
          )}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Remove&hellip;
        </button>
      )
    }
  ];

  return (
    <ItemActions
      id="mobile-book-actions"
      triggerId="mobile-book-actions-trigger"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isActive={isActive}
      options={options}
      optRefs={optRefs}
    />
  );
};

export default Actions;
