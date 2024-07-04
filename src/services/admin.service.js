import { api } from "../constants/api";

const api_admin = `${api}/admin`;

const getInfoAdmin = async (id) => {
  const response = await fetch(`${api_admin}/info/${id}`);
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  const data = await response.json();
  const admin = data.data;
  return admin;
};

const getRand = async () => {
  const response = await fetch(`${api_admin}/rand`);
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  const data = await response.json();
  if (data.error) return false;
  if (data.exito) return true;
};

const getAllDrivers = async () => {
  const response = await fetch(`${api_admin}/all/drivers`);
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  const data = await response.json();
  const drivers = data.data;
  return drivers;
};

const getAllRoutes = async () => {
  const response = await fetch(`${api_admin}/all/routes`);
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  const data = await response.json();
  const routes = data.data;
  return routes;
};

const getAllClients = async () => {
  const response = await fetch(`${api_admin}/all/clients`);
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  const data = await response.json();
  const clients = data.data;
  return clients;
};

const createClients = async (clients) => {
  const response = await fetch(`${api_admin}/create/clients`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ clients }),
  });

  if (!response.ok) {
    throw new Error("Error creating clients");
  }

  const data = await response.json();
  return data;
};

const postDriver = async (driver) => {
  try {
    const response = await fetch(`${api_admin}/register/driver`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        created_by: driver.created_by,
        username: driver.username,
        password: driver.password,
        first_name: driver.first_name,
        last_name: driver.last_name
      })
    })
    const res = await response.json()
    if (res.error) return false
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

const updateStatusDriver = async ({ username, status }) => {
  try {
    const response = await fetch(`${api_admin}/update/driver/status`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, status })
    })
    const res = await response.json()
    if (res.error) return false
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

const deleteDriver = async (id) => {
  try {
    const response = await fetch(`${api_admin}/delete/driver/${id}`, {
      method: "DELETE"
    })
    const res = await response.json()
    if (res.error) return false
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}


export {
  getInfoAdmin,
  getRand,
  getAllDrivers,
  getAllRoutes,
  createClients,
  getAllClients,
  postDriver,
  updateStatusDriver,
  deleteDriver
};
