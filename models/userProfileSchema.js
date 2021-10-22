const express = require("express");
const mongoose = require("mongoose");

const userProfileSchema = mongoose.Schema({
  about: {
    type: String,
  },
  birth: {
    type: String,
  },
  livesIn: {
    type: String,
  },
  occupation: {
    type: String,
  },
  joined: {
    type: String,
  },
  gender: {
    type: String,
  },
  status: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  religion: {
    type: String,
  },
  politicalStatus: {
    type: String,
  },
  hobbies: {
    type: String,
  },
  music: {
    type: String,
  },
  shows: {
    type: String,
  },
  books: {
    type: String,
  },
  movies: {
    type: String,
  },
  writers: {
    type: String,
  },
  dates: {
    type: Date,
    default: Date.now,
  },
});

const profileInfo = mongoose.model("");
