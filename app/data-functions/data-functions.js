import { ulid } from "ulid";
import data from '@/app/data/web-dev-bootcamp'

export function convertText2Objects() {
  console.log("data", data);
  const dataArray = data.split("\n");
  console.log("dataArray", dataArray);
}
