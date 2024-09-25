import { LogAPI } from "./LogAPI";

export const User = {
  Login: async () => {
    return LogAPI.get("/user")
      .then((res) => res.data)
      .catch((err) => err.response);
  },
};
