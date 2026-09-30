import { operator } from "@/lib/operatorClient";

async function handleClick() {
  const result = await operator("ceo", { revenue: 5000 });
  console.log(result);
}
