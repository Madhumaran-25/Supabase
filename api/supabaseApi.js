import axios from "axios";
import { API_KEY, API_URL, AUTHORIZATION } from "./Endpoints";


export const fetchUsers = async () => {
   const response = await axios.get(`${API_URL}/UserList`, {
      headers: {
         apikey: API_KEY,
         Authorization: AUTHORIZATION,
      }
   });
   console.log("The reponse from axios api call is", response)
   return response.data;
}

export const postUser = async (userData) => {
   console.log("function entered this part");

   try {
      const response = await axios.post(`${API_URL}/UserList`, userData, {
         headers: {
            apikey: API_KEY,
            Authorization: AUTHORIZATION,
            "Content-Type": "application/json"
         },
      });
      console.log("the posted response is", response.data);
      return response.data;
   } catch (error) {
      console.log(" Error posting user:", error?.response?.data || error.message);
      throw error;
   }
};

export const deleteUser = async (userId) => {

   try {
      const response = await axios.delete(`${API_URL}/UserList?id=eq.${userId}`, {

         headers: {
            apikey: API_KEY,
            Authorization: AUTHORIZATION,
            Prefer: "return=representation",
         }
      }
      );
      console.log("the deleted user  is", response.data);

   } catch (error) {
      console.log(error, "the error is")
   };

}


export const fetchOrders = async () => {
   const response = await axios.get(`${API_URL}/Orders`, {
      headers: {
         apikey: API_KEY,
         Authorization: AUTHORIZATION
      }
   })
   console.log("the data from order api is ", data)
   return response.data
}


export const fetchOrdersByUserId = async (userId) => {
   if (!userId) return;
   try {
      const response = await axios.get(
         `${API_URL}/Orders?user_id=eq.${userId}&select=id,item,quantity,OrderList(isDelivered)`,
         {
            headers: {
               apikey: API_KEY,
               Authorization: `Bearer ${API_KEY}`,
            },
         }
      );
      console.log("the response is ", response.data)
      return response.data;
   } catch (error) {
      console.error("Error fetching orders:", error.response?.data || error.message);
      return [];
   }
};


export const fetchProducts = async ({ pageParam = 0 }) => {
   console.log("Fetch product function called");
   try {
      const response = await axios.get(`${API_URL}/Products?limit=20&offset=${pageParam}`,
         {
            headers: {
               apikey: API_KEY,
               Authorization: AUTHORIZATION
            }
         }
      )
      console.log("The fetched products are", response.data)
      return response.data
   } catch (error) {
      console.log("The error in catc block is ", error)
   }
}