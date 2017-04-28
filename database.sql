-- create user table
CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null,
  "password" varchar(120) not null
);

-- create students table
CREATE TABLE "students" (
  "id" serial primary key,
  "name" varchar(80) not null,
  "email" varchar(80) not null,
  "instrument" varchar(120) not null,
  "day" varchar(80) not null,
  "teacher" varchar(120) not null
);
