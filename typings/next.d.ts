import { NextContext } from "next";

declare module "next/router" {
  export const useRouter: () => NextContext;
}
