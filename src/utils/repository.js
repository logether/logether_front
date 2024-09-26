import { LogAPI } from "./LogAPI";

export const User = {
  Login: async (data) => {
    console.log("data" + data);
    return LogAPI.post("/user/login", data)
      .then((res) => res.data)
      .catch((err) => err.response);
  },
};
