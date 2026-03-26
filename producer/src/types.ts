import z from "zod";

export const OrdersInputSchema = z.object({
  item: z.string(),
  quantity: z.number(),
});

export type Order = z.infer<typeof OrdersInputSchema>;
