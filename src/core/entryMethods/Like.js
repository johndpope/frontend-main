import EntryMethod from './EntryMethod'

export default class Like extends EntryMethod {
  /**
   * The entry method name and idetified.
   *
   * @var {string}
   */
  get name () {
    return 'like'
  }

  /**
   * The entry method display icons.
   *
   * @var {any}
   */
  get icon () {
    return this.progress || {
      type: 'fas',
      name: 'fa-heart'
    }
  }

  /**
   * Automatically enter the competition.
   *
   * @param {any} competition
   */
  auto (competition) {
    return {
      method: this.name,
      id: competition.resource_id
    }
  }

  /**
   * Manually enter the competition.
   *
   * @param {any} competition
   */
  async manual (competition) {
    open(`https://twitter.com/intent/like?tweet_id=${competition.resource_id}`)
  }
}
