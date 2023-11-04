import { writable } from "svelte/store";

export const theme = writable(0);

export const websiteSection = writable(-1);

export const scrollSnap = writable(true);
