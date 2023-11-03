export const useCreateUser = async (user: any) => {
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
