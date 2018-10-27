
export default {
  api: {
    competitions: env('API_BASE_URL') + '/competitions',
    promoters: env('API_BASE_URL') + '/promoters',
    requestToken: env('API_BASE_URL') + '/me/request-token',
    sync: env('API_BASE_URL') + '/me/sync'
  },

  pagination: {
    competitions: 20
  },

  twitter: {
    oauth: 'https://twitter.com/oauth/authenticate?oauth_token=',
    methods: {
      like: 'https://api.twitter.com/1.1/favorites/create.json'
    }
  },

  assets: {
    cdnUrl: '/static/'
  }
}