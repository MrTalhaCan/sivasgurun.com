import { revalidateTag } from "next/cache";

export async function GET() {
  //revalidateTag("super-league"); // "super-league" etiketine sahip verileri güncelle
  //revalidateTag("trends-page");
  //revalidateTag("right");
  //revalidateTag("bsl");
  revalidateTag("trends");
  revalidateTag("home");
  revalidateTag("weather");
  revalidateTag("earthQuakes");
  revalidateTag("schoolposts");
  return Response.json({ success: true });
}
