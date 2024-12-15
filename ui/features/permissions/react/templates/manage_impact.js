/*
 * Copyright (C) 2023 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import {useScope as createI18nScope} from '@canvas/i18n'
import {generateActionTemplates} from '../generateActionTemplates'

const I18n = createI18nScope('permissions_templates_80')

export const template = generateActionTemplates(
  [
    {
      title: I18n.t('Impact - Manage'),
      description: I18n.t(
        'Allows an account administrator to manage the Impact service integration.'
      ),
    },
  ],
  [
    {
      title: I18n.t('Impact'),
      description: I18n.t('Impact is an add-on to Canvas LMS. Contact your CSM if interested.'),
    },
  ]
)
