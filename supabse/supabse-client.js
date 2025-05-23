import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://jhdkrxefyowcvflrxycn.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoZGtyeGVmeW93Y3ZmbHJ4eWNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyNTk3NDksImV4cCI6MjA1OTgzNTc0OX0.Y9p575Yu4apxHVGtwJifWArQ0xt4J_HhIiF6jAaMvr0";

const supabase = createClient(supabaseURL, supabaseAnonKey, {
    realtime: {
         enabled: false,
    }
});

export default supabase;