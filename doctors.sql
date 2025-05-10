-- Active: 1745064282933@@127.0.0.1@5432@online_doctors
CREATE DATABASE online_Doctors;

CREATE TABLE doctors (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  specialization TEXT,
  qualification TEXT,
  experience INTEGER,
  location TEXT,
  clinic TEXT,
  rating INTEGER,
  patient_count INTEGER,
  fee INTEGER,
  cashback INTEGER,
  available_in INTEGER,
  consult_mode TEXT[],
  languages TEXT[],
  profile_img TEXT
);

SELECT * FROM doctors;