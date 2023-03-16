import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push("/Pokemon?id=1");
  });
}
