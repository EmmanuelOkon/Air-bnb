"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

import { Control, useController } from "react-hook-form";
import type { HomeListingFormData } from "@/lib/schema";

interface CounterProps {
  name: keyof Pick<HomeListingFormData, "guests" | "rooms" | "bathrooms">;
  control: Control<HomeListingFormData>;
  defaultValue?: number;
}

export function Counter({ name, control }: CounterProps) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: 0,
  });

  function increase() {
    onChange(value + 1);
  }

  function decrease() {
    if (value > 0) {
      onChange(value - 1);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-y-1 items-end">
        <div className="flex items-center gap-x-4 p-1 border rounded-md">
          <input type="hidden" name={name} value={value} />
          <Button
            variant="outline"
            size="icon"
            type="button"
            onClick={decrease}
            disabled={value === 0}
          >
            <Minus className="h-5 w-5 text-primaryRose" />
          </Button>
          <p className="font-medium text-lg">{value}</p>
          <Button
            variant="outline"
            size="icon"
            type="button"
            onClick={increase}
          >
            <Plus className="h-4 w-4 text-primaryRose" />
          </Button>
        </div>
        {error && (
          <p className="text-sm font-medium text-destructive">
            {error.message}
          </p>
        )}
      </div>
    </>
  );
}
