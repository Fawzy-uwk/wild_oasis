import supabase from "./supabase";
export const supabaseUrl = "https://rnogxvhsaxnxhdnjykcu.supabase.co";
export async function Login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

//Logout
export async function LogOut() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

//Registeration
export async function Register({ fullName, email, password }) {
  await supabase.auth.signUp({
    fullName,
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
}

export async function updateCurrentUser({ fullName, avatar, password }) {
  //1)Update Password or FullName
  let updateData;
  if (password) updateData = { password };

  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  if (!avatar) return data;

  //2)Updload Avatar img

  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("Avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  //3)Update Avatar
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/Avatars/${fileName}`,
    },
  });
  if (error2) throw new Error(error2.message);

  return updatedUser;
}
