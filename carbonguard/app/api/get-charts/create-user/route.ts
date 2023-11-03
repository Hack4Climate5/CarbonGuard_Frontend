import { BASE_URL } from "@/config";
export async function POST(request: Request) {
  try {
    if (!URL) {
      return new Response("Base url not found", {
        status: 404,
        statusText: "Failed",
      });
    }
    const posts = await request.json().then(async (response) => {
      const result = await fetch(`${BASE_URL}/user/list/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
      });
      const post = await result.json();
      return post;
    });
    return new Response(JSON.stringify(posts), {
      status: 201,
      statusText: "Success",
    });
  } catch (error: any) {
    return new Response(error.message, {
      status: 500,
      statusText: "Failed",
    });
  }
}









