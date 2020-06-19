import moment from 'moment'
import slug from 'slug'
import { v4 as uuidv4 } from 'uuid'
import { Route } from 'vue-router'
import { Routes, RouteType } from '~/types'

let timestampFormat: string = 'MM/DD/YYYY HH:mm:ss.SSS'
const slugDelimiter = '-'

export const log = (...anyMessages: any[]) => {
  console.log(`${moment().format(timestampFormat)} | `, ...anyMessages)
}

/**
 *
 * @param fileName
 * @returns {*}
 */
export const getNewFileName = (fileName: string): string => {
  if (fileName) {
    let baseNameSlug = slugify(basename(fileName))
    let extension = fileName.split('.').pop()
    return `${baseNameSlug}${slugDelimiter}${uuidv4()}.${extension}`
  }
  return fileName
}

/**
 *
 * @param fileName
 * @returns {*|void|string|never}
 */
export const basename = (fileName: string): string => {
  return fileName.split('.').slice(0, -1).join('.')
}

export const slugify = (text: string): string => {
  return slug(text, slugDelimiter)
}

export const toBoolean = (value: string | boolean): boolean => {
  return typeof value === 'boolean' ? value : JSON.parse(value);
}

export const authenticatedAllowed = (route: Route): boolean => {
  return route.matched.some((record) =>
    record.path.startsWith(Routes.PROFILE_DYNAMIC.path) ||
    record.path.startsWith(Routes.PROFILE.path))
}

export const authenticatedNotAllowed = (route: Route): boolean => {
  return (
    route.path == Routes.LOGIN.path ||
    route.path == Routes.REGISTER.path ||
    route.path == Routes.FORGET_PASSWORD.path ||
    route.path == Routes.RESET_PASSWORD.path
  )
}

export const getUserRoute = (routeType: RouteType, username: string) => {
  return {
    name: routeType.name,
    params: {
      username,
    },
  }
}
