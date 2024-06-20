/*
 * Copyright (C) 2024 - present Instructure, Inc.
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

import {executeQuery} from '@canvas/query/graphql'
import {LOAD_DASHBOARD_CARDS_QUERY} from './graphql/Queries'
import type {Card} from './types'

interface DashboardQueryKeyParams {
  userID: string | null
  observedUserID: string | null
}

export async function fetchDashboardCardsAsync(params: DashboardQueryKeyParams): Promise<any> {
  const {userID, observedUserID} = params
  if (!LOAD_DASHBOARD_CARDS_QUERY) {
    throw new Error('GraphQL query not available')
  }
  if (!userID) {
    throw new Error('User ID is required')
  }

  const data = await executeQuery<any>(LOAD_DASHBOARD_CARDS_QUERY, {userID, observedUserID})
  return data
}

export function mapDashboardResponseToCard(data: any): Card[] {
  return data?.legacyNode?.favoriteCoursesConnection.nodes.map((node: any) => {
    const course_id = node._id
    const card = node.dashboardCard
    return {
      shortName: card.shortName,
      originalName: card.originalName,
      courseCode: card.courseCode,
      id: course_id,
      href: card.href,
      links: card.links,
      term: card.term.name !== 'Default Term' ? card.term.name : null,
      assetString: card.assetString,
      color: card.color,
      image: card.image,
      isFavorited: card.isFavorited,
      enrollmentType: card.enrollmentType,
      enrollmentState: card.enrollmentState,
      observee: card.observee,
      position: card.position,
      published: card.published,
      canChangeCoursePublishState: card.canChangeCoursePublishState,
      defaultView: card.defaultView,
      pagesUrl: card.pagesUrl,
      frontPageTitle: card.frontPageTitle,
      isK5Subject: card.isK5Subject,
      isHomeroom: card.isHomeroom,
    }
  })
}
