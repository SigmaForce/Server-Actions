"use client";

import prismaClient from "@/prismaClient";
import { revalidatePath } from "next/cache";
import { useTransition } from "react";
import { deleteCar } from "./actions";

type DeleteButtonProps = {
  id: number;
};
export default function DeleteButton({ id }: DeleteButtonProps) {
  let [isPending, startTransition] = useTransition();

  return (
    <label htmlFor="">
      {isPending && <span>...</span>}
      <button
        type="button"
        onClick={(ev) => {
          startTransition(() => {
            deleteCar(id);
          });
        }}
      >
        Excluir
      </button>
    </label>
  );
}
