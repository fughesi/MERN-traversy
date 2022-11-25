// import React, { useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { register, reset } from "../features/auth/authSlice";
// import { toast } from "react-toastify";
// import { Spinner } from "../components/Spinner";

// const formDataContext = React.createContext();

// export function useFormData() {
//   return useContext(formDataContext);
// }

// export function FormDataProvider({ children }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     password2: "",
//   });

//   const { name, email, password, password2 } = formData;

//   const navigate = useNavigate();

//   const dispatch = useDispatch();

//   const { user, isLoading, isSuccess, isError, message } = useSelector(
//     (state) => state.auth
//   );

//   const clearForm = () => {
//     setFormData({ name: "", email: "", password: "", password2: "" });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();

//     if (password !== password2) {
//       toast.error("passwords do not match");
//     } else {
//       const userData = {
//         name,
//         email,
//         password,
//       };

//       dispatchEvent(register(userData));
//     }
//     clearForm();
//   };

//   useEffect(() => {
//     if (isError) {
//       toast.error(message);
//     }

//     if (isSuccess || user) {
//       navigate("/");
//     }

//     dispatch(reset);
//   }, [user, isError, isSuccess, message, navigate, dispatch]);

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((i) => ({
//       ...i,
//       [name]: value,
//     }));
//   };

//   if (isLoading) {
//     return <Spinner />;
//   }

//   return (
//     <formDataContext.Provider
//       value={{
//         formData,
//         setFormData,
//         onSubmit,
//         onChange,
//         clearForm,
//         navigate,
//         dispatch,
//         useSelector,
//       }}
//     >
//       {children}
//     </formDataContext.Provider>
//   );
// }
