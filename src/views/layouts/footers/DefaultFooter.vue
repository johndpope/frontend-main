<template>
  <footer class="default-footer">
    <hr class="is-medium">

    <nav class="default-footer-links">
      <router-link :to="{ name: 'contact' }">
        Contact Us
      </router-link>
      &middot;
      <router-link :to="{ name: 'privacy-policy' }">
        Privacy Policy
      </router-link>
      &middot;
      <router-link :to="{ name: 'terms-and-conditions' }">
        Terms &amp; Conditions
      </router-link>
    </nav>

    <nav class="default-footer-social">
      <a target="_blank" href="https://twitter.com/prizeprofile">
        <icon type="fab" name="fa-twitter-square"></icon>
      </a>
      <a target="_blank" href="https://www.facebook.com/groups/212140399338231">
        <icon type="fab" name="fa-facebook"></icon>
      </a>
      <a target="_blank" href="https://chatfuel.com/bot/CompetitionBot">
        <icon type="fab" name="fa-facebook-messenger"></icon>
      </a>
    </nav>
  </footer>
</template>
