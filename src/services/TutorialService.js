import api from "./api";
// const getAll = () => {
//   return api.get("/v1/users");
// };
// const get = id => {
//   return api.get(`/v1/users/${id}`);
// };
const create = data => {
  return api.post("/v1/users", data);
};

// const update = (id, data) => {
//   return api.put(`/v1/users/${id}`, data);
// };
// const remove = id => {
//   return api.delete(`/v1/users/${id}`);
// };
// const removeAll = () => {
//   return api.delete(`/v1/users`);
// };
// const findByTitle = name => {
//   return api.get(`/v1/users?name=${name}`);
// };
const TutorialService = {
  // getAll,
  // get,
  create,
  // update,
  // remove,
  // removeAll,
  // findByTitle
};
export default TutorialService;
