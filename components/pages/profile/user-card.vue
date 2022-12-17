<template>
  <g-card class="card-user">
    <div class="author">
      <div class="block block-one"></div>
      <div class="block block-two"></div>
      <div class="block block-three"></div>
      <div class="block block-four"></div>
      <img class="avatar" :src="userImage" alt="User Image" />
      <div>
        <font-awesome-icon icon="fa-solid fa-upload" @click="uploadImage()" />
        <font-awesome-icon
          v-if="hasImage"
          icon="fa-solid fa-trash"
          class="hover"
          @click="deleteImage()"
        />
      </div>
      <h5 class="title"> {{ userName }} {{ userSurname }}</h5>
    </div>
  </g-card>
</template>

<script>
import api from "@/src/api";

import staticUrlMixin from "@/src/mixins/staticUrlMixin";
import userMixin from "@/src/mixins/userMixin";

export default {
  mixins: [staticUrlMixin, userMixin],
  methods: {
    uploadImage() {

    },
    deleteImage() {
      this.$axios(api.deleteUserImage()).then(response => {
        if (typeof response.data.content.success !== undefined && response.data.content.success) {
          this.$auth.fetchUser();
        }
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.hover:hover {
  cursor: pointer;
}
</style>
