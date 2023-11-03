export const getDetails = async (id: number) => {
 
  const response = await fetch(`/api/get-user/${id}`, {
    method: "GET",
  });
  const result = await response.json();
  return result;
} ;

export const getPosts= async()=>{
  const url ='api/get-users'
  try{
      const response = await fetch(url)
      const result = await response.json();
      return result;
  }
  catch(error:any){
      return error.message
  }
}



export const getVehicles= async()=>{
  const url ='api/get-vehicles'
      const response = await fetch(url)
      const result = await response.json();
      return result;
  }
  export const createUser = async (user: any) => {
    const url= 'api/create-user'
    try {
      if (!url) {
        return {
          success: false,
          message: "Base URL not found",
        };
      }
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.status === 201) {
        const result = await response.json();
        return {
          success: true,
          data: result,
        };
      } else {
        const errorData = await response.json();
        return {
          success: false,
          message: errorData.error || "Failed to create user",
        };
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message || "Internal server error",
      };
    }
  };
  
  
  
  
  
  
  
  
  
  

export const loginUser = async (user: any) => {
  const url = 'api/login-user'
  try {
    if (!url) {
      return {
        success: false,
        message: "Base URL not found",
      };
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.status === 200) {
      const result = await response.json();
      return {
        success: true,
        data: result,
      };
    } else {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.error || "Login failed",
      };
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Internal server error"
    };
  }
};

// export const loginUser = async (user: any) => {
//   const url= 'api/login-user'
//   try {
//     if (!url) {
//       return {
//         success: false,
//         message: "Base URL not found",
//       };
//     }

//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     });

//     if (response.status === 200) {
//       const result = await response.json();
//       return {
//         success: true,
//         data: result,
//       };
//     } else {
//       const errorData = await response.json();
//       return {
//         success: false,
//         message: errorData.error || "Login failed",
//       };
//     }
//   } catch (error: any) {
//     return {
//       success: false,
//       message: error.message || "Internal server error"
//     };
//   }
// };


export const getChart = async () => {
  const url = `/api/get-charts`
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Page not found');
    }
    const result = await response.json();
    return result;
  } catch (error:any) {
    throw new error.message;
  }
};
export const getEmissionChart = async () => {
  const url = `/api/get-emission-chart`
    
      const response = await fetch(url);
      // if (!response.ok) {
      //   throw new Error('Page not found');
      // }
      const result = await response.json();
      return result;
    
  };
export const getCreditChart = async () => {
    const url = `/api/get-credits-chart`
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Page not found');
        }
        const result = await response.json();
        return result;
      } catch (error:any) {
        throw new Error(error.message);
      }
    };





