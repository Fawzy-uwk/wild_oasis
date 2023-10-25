import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rnogxvhsaxnxhdnjykcu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJub2d4dmhzYXhueGhkbmp5a2N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY3ODI3MTEsImV4cCI6MjAxMjM1ODcxMX0.-drxyvkZjUR5jSmSi_pGZ2qMwoBL8sS_i21f5Z8IoA4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
