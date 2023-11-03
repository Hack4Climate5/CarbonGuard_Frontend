import { BASE_URL } from "@/config";

export async function GET(
  _request: Request,
  { params }: { params: { id: number } }
) {
  const id = params.id;
  const response = await fetch(`${BASE_URL}/user/details/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return new Response(JSON.stringify(result), {
      status: 200,
      statusText: "success",
    });
  } 
