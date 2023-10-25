import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Error fetching cabin list");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  
  // const hasImgPath = newCabin.img?.startsWith?.(supabaseUrl);
  const hasImgPath = newCabin.img?.startsWith?.(supabaseUrl);
  const imgName = `${Math.random()}-${newCabin.img.name}`.replaceAll("/", "");
  // // const imgPath = hasImgPath
  //   ? newCabin.imge
  const imgPath = hasImgPath
    ? newCabin.img
    : `${supabaseUrl}/storage/v1/object/public/Cabin-imgs/${imgName}`;

  let query = supabase.from("cabins");
  //crrate Cabin
  if (!id) query = query.insert([{ ...newCabin, img: imgPath }]);

  //edit Cabin
  if (id) query = query.update({ ...newCabin, img: imgPath }).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) {
    throw new Error("Cabin could not be created");
  }

  //Upload image:
  if (hasImgPath) return data;
  const { error: storageError } = await supabase.storage
    .from("Cabin-imgs")
    .upload(imgName, newCabin.img);

  // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }
  return data;
}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
