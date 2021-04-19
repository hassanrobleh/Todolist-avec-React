import * as axios from "axios";

const apiFirebase = axios.create({
  baseURL: "https://todo-r-c17-42e89-default-rtdb.firebaseio.com/",
});

export default apiFirebase
