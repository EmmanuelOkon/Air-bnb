"use server";

import { homeListingSchema } from "@/lib/schema";
import { z } from "zod";

export async function createHomeListingAction(
  _prevState: unknown,
  formData: FormData
) {
  const defaultValues = Object.fromEntries(formData.entries());

  try {
    const data = homeListingSchema.parse({
      ...defaultValues,
      image: formData.get("image") as File,
    });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form data:", data);

    return {
      defaultValues: {
        title: "",
        description: "",
        price: 0,
        guests: 0,
        rooms: 0,
        bathrooms: 0,
      },
      success: true,
      message: "Home listing created successfully!",
      errors: null,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        defaultValues,
        success: false,
        message: null,
        errors: Object.fromEntries(
          Object.entries(error.flatten().fieldErrors).map(([key, value]) => [
            key,
            value?.join(", "),
          ])
        ),
      };
    }

    return {
      defaultValues,
      success: false,
      message: "Something went wrong. Please try again.",
      errors: null,
    };
  }
}
