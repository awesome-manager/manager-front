<template>
  <div class="row">
    <div class="col-md-8"><edit-profile-form /></div>
    <div class="col-md-4"><user-card /></div>
  </div>
</template>

<script>
import EditProfileForm from '@/components/pages/profile/form';
import UserCard from '@/components/pages/profile/user-card';

export default {
  name: 'user',
  components: {
    EditProfileForm,
    UserCard
  }
};
</script>
