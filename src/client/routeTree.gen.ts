/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WebsiteImport } from './routes/website'
import { Route as RegisterImport } from './routes/register'
import { Route as LoginImport } from './routes/login'
import { Route as IndexImport } from './routes/index'
import { Route as WebsiteWebsiteIdImport } from './routes/website/$websiteId'

// Create/Update Routes

const WebsiteRoute = WebsiteImport.update({
  path: '/website',
  getParentRoute: () => rootRoute,
} as any)

const RegisterRoute = RegisterImport.update({
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const WebsiteWebsiteIdRoute = WebsiteWebsiteIdImport.update({
  path: '/$websiteId',
  getParentRoute: () => WebsiteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '/website': {
      preLoaderRoute: typeof WebsiteImport
      parentRoute: typeof rootRoute
    }
    '/website/$websiteId': {
      preLoaderRoute: typeof WebsiteWebsiteIdImport
      parentRoute: typeof WebsiteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  LoginRoute,
  RegisterRoute,
  WebsiteRoute.addChildren([WebsiteWebsiteIdRoute]),
])

/* prettier-ignore-end */
