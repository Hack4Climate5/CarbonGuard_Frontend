// import { BASE_URL } from "@/config";

// export async function POST(request: Request) {
//   try {
//     const response = await request.json();

//     const result = await fetch(`${BASE_URL}/user/login/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(response),
//     });

//     const responseData = await result.json();

//     return new Response(JSON.stringify(responseData), {
//       status: result.status,
//       statusText: result.ok ? "Success" : "Failed",
//     });
//   } catch (error: any) {
//     return new Response(error.message, {
//       status: 500,
//       statusText: "Internal Server Error",
//     });
//   }
// }

import { BASE_URL } from "@/config";
export async function POST(request: Request) {
  try {
    const response = await request.json();
    const result = await fetch(`${BASE_URL}/user/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response),
    });
    const responseData = await result.json();
    return new Response(JSON.stringify(responseData), {
      status: result.status,
      statusText: result.ok ? "Success" : "Failed",
    });
  } catch (error: any) {
    return new Response(error.message, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}