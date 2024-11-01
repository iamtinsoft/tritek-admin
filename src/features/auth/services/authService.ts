import apiClient from "../../../services/api-client";


export const AuthorizeUser = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;
  const obj = { Username: data.Username, Password: data.Password};
  await apiClient
    .post("/auth/", obj)
    .then((res) => {
     
      response = res.data;
      isLoading = false;
    })
    .catch((err) => {
      error = err.response.data;
      console.log(err);
      isLoading = false;
    });
  return { response, error, isLoading };
};


export const UpdateUserPassword = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;
  const obj = { Email: data.Email, Password: data.Password};
  await apiClient
    .put("/auth/update-password", obj)
    .then((res) => {
     
      response = res.data;
      isLoading = false;
    })
    .catch((err) => {
      error = err.response.data;
      console.log(err);
      isLoading = false;
    });
  return { response, error, isLoading };
};

export const ValidateUser = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;
  await apiClient
    .get("/auth/email/"+data.Email)
    .then((res) => {
     
      response = res.data;
      isLoading = false;
    })
    .catch((err) => {
      error = err.response.data;
      console.log(err);
      isLoading = false;
    });
  return { response, error, isLoading };
};
export const CreateUserAccount = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;
  const obj = {Firstname: data.Firstname, Lastname: data.Firstname,Username: data.Username,Email: data.Email,  Password: data.Password};
  await apiClient
    .post("/users/", obj)
    .then((res) => {
      response = res.data;
      isLoading = false;
    })
    .catch((err) => {
      error = err.response.data;
      console.log(err);
      isLoading = false;
    });
  return { response, error, isLoading };
};

