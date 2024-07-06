import { api } from "../constants/api";

const loginAdmin = async (username, password) => {
  try {
    const response = await fetch(`${api}/login/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const loginDriver = async (username, password) => {
  try {
    const response = await fetch(`${api}/login/driver`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { loginAdmin, loginDriver };
