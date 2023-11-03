

// export const useLoginUser = async (credentials: any) => {
//   try {
//     const response = await fetch('/api/login-user', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(credentials),
//     });

//     const responseData = await response.json();

//     return responseData;
  // } catch (error) {
  //   console.error('Error:', error);
  //   throw new Error('Error occurred. Please check the console for details.');
  // }
// };

export const useLoginUser = async (credentials: any) => {
  const url = 'api/login-user';
  if (!url) {
    return {
      success: false,
      message: "Base URL not found",
    };
  }
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
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
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Error occurred. Please check the console for details.');
  
  }
};
