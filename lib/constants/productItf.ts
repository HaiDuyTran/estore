import { Prisma } from "@/prisma/app/generated/prisma/client";
import { Decimal } from "@/prisma/app/generated/prisma/client/runtime/library";
import { OrderItem, Review } from "@/types";

export interface Product {
    id: string;           // Maps from String @id @db.Uuid
    name: string;         // Maps from String
    slug: string;         // Maps from String @unique
    category: string;     // Maps from String
    images: string[];     // Maps from String[]
    brand: string;        // Maps from String
    description: string;  // Maps from String
    stock: number;        // Maps from Int
    price: Decimal;       // Maps from Decimal. Prisma client returns this as a Decimal object for precision.
                          // Use 'number' if you prefer standard JS numbers (potential precision loss),
                          // or 'string' if you handle it as a string.
    rating: Decimal;      // Maps from Decimal. Same considerations as 'price'.
    numReviews: number;   // Maps from Int
    isFeatured: boolean;  // Maps from Boolean
    banner: string | null;// Maps from String? (nullable string)
    createdAt: Date;      // Maps from DateTime
  
    // --- Relations (Optional based on query inclusion) ---
    // Mark these as optional ('?') because they are only present if explicitly included in the Prisma query (e.g., using `include`).
    OrderItem?: OrderItem[]; // Maps from OrderItem[] relation
    Review?: Review[];      // Maps from Review[] relation
  
    // --- JSON Field ---
    embedding: Prisma.JsonValue | null; // Maps from Json?. Prisma.JsonValue is Prisma's type for JSON fields
                                        // (can be string, number, boolean, null, object, or array).
                                        // Use 'any | null' for less strict typing if preferred.
  }