module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [["@babel/transform-arrow-functions", {"spec": true}]],
  };
};
