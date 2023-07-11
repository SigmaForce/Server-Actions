"use client";

import prismaClient from "@/prismaClient";
import { revalidatePath } from "next/cache";
import { useTransition } from "react";
import { updateAvailability } from "./actions";

type AvailableCheckboxProps = {
  isAvailable: boolean;
  id: number;
};
export default function AvailableCheckbox({
  isAvailable,
  id,
}: AvailableCheckboxProps) {
  let [isPending, startTransition] = useTransition();

  return (
    <label htmlFor="">
      {isPending && <span>...</span>}
      <input
        type="checkbox"
        checked={isAvailable}
        onChange={(ev) => {
          startTransition(() => {
            updateAvailability(id, ev.target.checked);
          });
        }}
      />
    </label>
  );
}
