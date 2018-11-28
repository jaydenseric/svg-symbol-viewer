import App from 'next/app'
import Router from 'next/router'

if (process.env.GA_TRACKING_ID)
  Router.events.on('routeChangeComplete', url => {
    if (typeof window.ga === 'function') {
      window.ga('set', 'page', url)
      window.ga('send', 'pageview')
    }
  })

export default class CustomApp extends App {}
