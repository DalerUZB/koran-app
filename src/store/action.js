import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const fetchSurah = createAsyncThunk("fetchSurah", () =>
  api.fetchSurahApi()
);
export const fetchSuraname = createAsyncThunk("fetchSurahByName", (id) =>
  api.fetchSurahByName(id)
);
export const fetchSuraAudio = createAsyncThunk("fetchSurahAudio", (id) =>
  api.fetchSurahAudio(id)
);
export const fetchTranslate = createAsyncThunk(
  "fetchSurahTranslation",
  (body) => api.fetchSurahTranslation(body)
);
export const fetchJuz = createAsyncThunk("fetchSurahByJuz", (body) =>
  api.fetchSurahByJuz(body)
);
export const fetchJuzUZB = createAsyncThunk("fetchJuzUZ", (body) =>
  api.fetchJuzUZ(body)
);
export const fetchAyah = createAsyncThunk("fetchAyah", (number) =>
  api.fetchAyah(number)
);
export const fetchAyahUZ = createAsyncThunk("fetchAyahUZ", (number) =>
  api.fetchAyahUZ(number)
);
export const fetchAyahAudio = createAsyncThunk("fetchAyahAudio", (id) =>
  api.fetchAyahAudio(id)
);
export const fetchTaqvim = createAsyncThunk("fetchTaqvimNamaz", (body) =>
  api.fetchTaqvimNamaz(body)
);
export const fetchNameLord = createAsyncThunk("fetchLordNames", () =>
  api.fetchLordNames()
);
export const fetchName = createAsyncThunk("fetchName", (number) =>
  api.fetchName(number)
);
