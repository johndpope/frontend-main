<template>
  <modal name="connect-twitter">
    <div class="connect-twitter-modal">
      <div class="connect-twitter-modal-image">
        <pic
          style="margin: auto"
          radius
          :src="`$/images/icons/android-chrome-512x512.png`"
          alt="Prize Profile"
        ></pic>
      </div>

      <div class="connect-twitter-modal-body">
        <h3 class="title is-4">Connect Twitter</h3>
        <p class="subtitle is-6 has-text-grey">
          To enter competitions in one click you need to connect your Twitter.
          We will never post without your permission.
        </p>
      </div>

      <div class="connect-twitter-modal-action">
        <action medium @click="auth" :loading="loading">
          <icon type="fab" name="fa-twitter"></icon>
          &nbsp;&nbsp;
          Connect Twitter
        </action>
      </div>
    </div>
  </modal>
</template>

<script>
import { USER_CONNECT_TWITTER } from '@/store/types'

export default {
  data () {
    return {
      loading: false
    }
  },

  methods: {
    auth () {
      this.loading = true

      this.$store.dispatch(USER_CONNECT_TWITTER)
        .catch(console.error)
        .then(() => this.loading = false)
    }
  }
}
</script>
