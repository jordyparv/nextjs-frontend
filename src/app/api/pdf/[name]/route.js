import { STRAPI_URL } from "@/utils/constraints";
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const fileUrl = searchParams.get("url");

  if (!fileUrl) {
    return new Response("Missing file URL", { status: 400 });
  }

  const response = await fetch(STRAPI_URL + fileUrl);
  const buffer = await response.arrayBuffer();

  return new Response(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline"
    }
  });
}