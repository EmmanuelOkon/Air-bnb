import { z } from "zod";

export const homeListingSchema = z.object({
  title: z
    .string()
    .min(2, {
      message:
        "Please provide a title for your home. It should be short and simple.",
    })
    .max(32, { message: "Title cannot be more than 32 characters" }),
  description: z
    .string()
    .min(10, {
      message:
        "Please provide a description for your home. It should be detailed and informative.",
    })
    .max(1000, { message: "Description cannot be more than 500 characters" }),
  price: z
    .string()
    .min(2, {
      message:
        "Please provide a price for your home. It should be at least $10.",
    })
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val >= 0, {
      message: "Price must be a positive number",
    }),
  image: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => {
        if (file) {
          return ["image/jpeg", "image/png", "image/webp"].includes(file.type);
        }
        return true;
      },
      { message: "File must be a valid image (JPEG, PNG, or WebP)" }
    ),
  guests: z
    .number()
    .int()
    .min(1, { message: "Number of guests must be at least 1" }),
  rooms: z
    .number()
    .int()
    .min(2, { message: "Number of rooms must be at least 2" }),
  bathrooms: z.number().int().min(1, {
    message: "Number of bathrooms must be at least 1",
  }),
});

export type HomeListingFormData = z.infer<typeof homeListingSchema>;
