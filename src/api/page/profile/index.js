import { post, del } from "@/src/api/factory";

export default {
  updateUser(data) {
    return post('/ajax/page/profile/update', data, {
      'Content-Type': 'multipart/form-data',
    });
  },
  createUserImage(data) {
    return post('/ajax/page/profile/image', data);
  },
  deleteUserImage() {
    return del('/ajax/page/profile/image');
  }
};
