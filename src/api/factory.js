const get = (path, data, headers) => {
  return {
    url: path,
    params: data || {},
    headers: headers || {},
  };
};

const post = (path, data, headers) => {
  return {
    url: path,
    method: 'post',
    data: data || {},
    headers: headers || {},
  };
};

const del = (path, data, headers) => {
  return {
    url: path,
    method: 'delete',
    data: data || {},
    headers: headers || {},
  };
};

export { get, post, del };
