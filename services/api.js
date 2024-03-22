import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://msghuqaexgvceskexpeo.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zZ2h1cWFleGd2Y2Vza2V4cGVvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTExMzg0OSwiZXhwIjoyMDI2Njg5ODQ5fQ.ZlIgJOZxpc51b9UQm3tbXMp7Ya8nBsvyM6qO71MaNFo",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zZ2h1cWFleGd2Y2Vza2V4cGVvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTExMzg0OSwiZXhwIjoyMDI2Njg5ODQ5fQ.ZlIgJOZxpc51b9UQm3tbXMp7Ya8nBsvyM6qO71MaNFo'
    }
})