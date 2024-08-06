"use server";

import { createClient } from "@/client/supabase";
import { schema } from "@/utils/validation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function sellYourItem(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
    quantity: formData.get("quantity"),
    imageUrl: formData.get("imageUrl"),
    contactEmail: formData.get("contactEmail"),
  });

  if (!validatedFields.success) {
    return {
      type: "error",
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation error in actions/sellurItem",
    };
  }

  const { name, price, description, contactEmail, imageUrl } =
    validatedFields.data;

  const supabase = createClient();

  try {
    const fileName = `${Math.random()}-${imageUrl.name}`;
    const { data, error } = await supabase.storage
      .from("Images")
      .upload(fileName, imageUrl, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.log(error);
      return {
        type: "error",
        message: "Error uploading image",
      };
    }
    if (data) {
      const path = data.path;
      // insert data
      const { error: pdctInsertError, data: uploadData } = await supabase
        .from("easy-sell")
        .insert({ name, description, contactEmail, price, imageUrl: path });

      if (uploadData) {
        return {
          type: "success",
          message: "Data added succesfully",
        };
      }

      if (pdctInsertError) {
        return {
          type: "error",
          message: "Error inserting data into database",
        };
      }
    }
  } catch (error) {
    console.log("Error from upload");
    return {
      type: "error",
      message: "Error uploading image and inserting data into database",
    };
  }
  revalidatePath("/");
  redirect("/");
}

// export async function getData() {
//   const supabase = createClient();

//   const { data: products, error } = await supabase.from("easy-sell").select();
//   const { data: topProducts, error: topPdctError } = await supabase
//     .from("easy-sell")
//     .select()
//     .eq("boost", true);

//   return { products, error, topPdctError, topProducts };
//   revalidatePath("/");
// }
