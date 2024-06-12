const base_url = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const api_key = "?api_key=b61ec43f-16c2-4609-83d9-efae328d8e2e";

export const videoListEndpoint = () => base_url + "/videos" + api_key;

export const videoEndpoint = (id) => base_url + "/videos/" + id + api_key;