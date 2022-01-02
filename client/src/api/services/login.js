import Api from "../api";

const loginUser = async ({ email, password }) => {
  try {
    const { data } = await Api.post("auth/login", { email, password });

    if (data.result === "OK") {
      return {
        sessionId: data.sessionId,
        name: data.name,
        department: data.department,
        isAdmin: data.isAdmin,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

const registerUser = async ({
  name,
  surname,
  email,
  department,
  phone,
  password,
}) => {
  try {
    const { data } = await Api.post("auth/register", {
      name,
      surname,
      email,
      department,
      phone,
      password,
    });

    if (data.result === "OK") {
      return {
        createdAt: data.createdAt,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

const LoginApi = {
  login: loginUser,
  register: registerUser,
};

export default LoginApi;
