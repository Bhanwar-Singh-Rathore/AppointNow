
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://erspmtqllvdwwpjkksyt.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyc3BtdHFsbHZkd3dwamtrc3l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ2OTI3NTIsImV4cCI6MjAxMDI2ODc1Mn0.L-7Yf6wcZh_qeNAFj3skc-eF0qsWCeNa0W0TcSMKbJ8"
const supabase = createClient(supabaseUrl, supabaseKey) 
export default supabase;


