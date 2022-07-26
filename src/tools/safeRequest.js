export default function fetchSilence(store, error, action, param) {
  return new Promise((resolve, reject) => {
    store
      .dispatch(action, param)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        console.log('error: ', e);
        if (e.response) {
          if (e.response.status === 404) {
            error({ statusCode: 404 });
          } else {
            error({ statusCode: 500 });
          }
        }
        reject();
      });
  });
}
