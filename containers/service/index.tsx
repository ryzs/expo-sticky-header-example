import { Heading } from "@/components/Heading";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Header } from "@/components/Header";

export function Service() {
  return (
    <>
      <Header name="Service" />
      <Section1 />
      <Heading label="Home Cleaning" />
      <Section2 />
      <Section3 />
    </>
  );
}
