<template>
  <div class="container">
    <PageTitle :title="$t('page.home.title')" />

    <div class="columns is-centered">
      <div class="column is-5-desktop">
        <a class="box has-text-centered" href="https://github.com/SantiagoGasco87Jack/nuxt-ssr-firebase-oauth-typescript">
          <b-icon
            pack="fab"
            icon="github"
            size="is-large"
          />
          <span> {{ $t('page.home.goToSource') }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { getHead } from '~/service/seo-service'
import { DefaultMeta } from '~/types'
import PageTitle from '~/components/ui/PageTitle.vue'

@Component({
  components: { PageTitle }
})
export default class extends Vue {
  head () {
    return getHead(DefaultMeta)
  }
}
</script>
