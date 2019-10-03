import React from "react";

export const getGalleries = state =>
  Object.keys(state.entities.galleries).map(id => state.entities.galleries[id]);

export const getPosts = state =>
  Object.keys(state.entities.posts).map(id => state.entities.posts[id]);
