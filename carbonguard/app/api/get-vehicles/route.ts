import { BASE_URL } from "@/config";

export async function GET() {
    try{
        if(!BASE_URL){
            return new Response('Base url not found', {
                status:404,
                statusText:'Failed'
            })
        }
        const response=await fetch(`${BASE_URL}/emissionsdata/emissionsdata/`)
        const result=await response.json();
        const getResult = result.emissions_data;
       
        
        return new Response(JSON.stringify(getResult),{
            status:200,
            statusText:'Success'
        })

    }
    catch(error:any){
        return new Response(error.message,{
            status:500,
            statusText:'Failed'
        })
    }
    
}