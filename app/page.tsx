import { Ipod } from "@/components/Ipod";
import { APPLE_DEVELOPER_TOKEN } from "@/utils/constants/api";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  console.log("[v0] Page rendering, APPLE_DEVELOPER_TOKEN:", APPLE_DEVELOPER_TOKEN ? "exists" : "missing");
  
  const appleAccessToken = APPLE_DEVELOPER_TOKEN ?? "";

  const params = await searchParams;
  console.log("[v0] searchParams resolved:", params);
  const spotifyCode = params.code;

  console.log("[v0] Rendering Ipod component");
  return (
    <Ipod
      spotifyCallbackCode={spotifyCode}
      appleAccessToken={appleAccessToken}
    />
  );
}
