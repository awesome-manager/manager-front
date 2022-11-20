<template>
  <div>
    Ошибка сервера. <nuxt-link :to="{ name: i18nLink('index') }">На главную</nuxt-link>
  </div>
</template>

<script>
import routerMixin from "@/src/mixins/routerMixin";

export default {
  mixins: [routerMixin],
  layout: 'simple'
};
</script>
