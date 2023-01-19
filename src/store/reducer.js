import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAyah,
  fetchAyahAudio,
  fetchAyahUZ,
  fetchJuz,
  fetchJuzUZB,
  fetchName,
  fetchNameLord,
  fetchSuraAudio,
  fetchSurah,
  fetchSuraname,
  fetchTaqvim,
  fetchTranslate,
} from "./action";

const state = {
  loading: false,
  loader: false,
  loaderNameLord: false,
  dark: "dark",
  light: "light",
  quranNameList: [],
  taqvimTimeListName: [],
  taqvimTimeNamaz: {
    tong_saharlik: null,
    quyosh: null,
    peshin: null,
    asr: null,
    shom_iftor: null,
    hufton: null,
  },
  juz: [],
  juzUZ: [],
  surahName: [],
  surahAudio: [],
  ayahAudio: [],
  ayahs: [],
  ayahsUZ: [],
  surahTranslation: [],
  namesLord: [],
  nameLord: [],
};

export const quranAPP = createSlice({
  name: "quran",
  initialState: state,
  reducers: {
    setDarkTheme(state) {
      state.glovalTheme = true;
    },
    setLightTheme(state) {
      state.glovalTheme = false;
    },
    clearSurahAudio(state) {
      state.surahAudio = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchSurah.fulfilled, (state, action) => {
      state.quranNameList = action.payload;
    });
    builder.addCase(fetchTaqvim.fulfilled, (state, action) => {
      state.taqvimTimeListName = action.payload;
      state.taqvimTimeNamaz.tong_saharlik = action.payload.times.tong_saharlik;
      state.taqvimTimeNamaz.quyosh = action.payload.times.quyosh;
      state.taqvimTimeNamaz.peshin = action.payload.times.peshin;
      state.taqvimTimeNamaz.asr = action.payload.times.asr;
      state.taqvimTimeNamaz.shom_iftor = action.payload.times.shom_iftor;
      state.taqvimTimeNamaz.hufton = action.payload.times.hufton;
    });
    builder.addCase(fetchSuraname.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchSuraname.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchSuraname.fulfilled, (state, action) => {
      state.surahName = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchSuraAudio.fulfilled, (state, action) => {
      state.surahAudio = action.payload;
    });
    builder.addCase(fetchJuz.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchJuz.fulfilled, (state, { payload }) => {
      state.juz = payload;
      state.loading = false;
    });
    builder.addCase(fetchJuz.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchJuzUZB.fulfilled, (state, action) => {
      state.juzUZ = action.payload;
    });
    builder.addCase(fetchAyah.pending, (state, action) => {
      state.loading = true;
      state.loader = true;
    });
    builder.addCase(fetchAyah.fulfilled, (state, action) => {
      state.ayahs = action.payload;
      state.loader = false;
    });
    builder.addCase(fetchAyah.rejected, (state, action) => {
      state.loading = false;
      state.loader = false;
    });
    builder.addCase(fetchAyahAudio.fulfilled, (state, action) => {
      state.ayahAudio = action.payload;
    });
    builder.addCase(fetchAyahUZ.fulfilled, (state, action) => {
      state.ayahsUZ = action.payload;
    });
    builder.addCase(fetchTranslate.fulfilled, (state, { payload }) => {
      state.surahTranslation = payload;
    });
    builder.addCase(fetchNameLord.fulfilled, (state, { payload }) => {
      state.namesLord = payload;
    });
    builder.addCase(fetchName.pending, (state, { payload }) => {
      state.loaderNameLord = true;
    });
    builder.addCase(fetchName.fulfilled, (state, { payload }) => {
      state.nameLord = payload;
      state.loaderNameLord = false;
    });
    builder.addCase(fetchName.rejected, (state, { payload }) => {
      state.loaderNameLord = false;
    });
  },
});

export const { setDarkTheme, setLightTheme, clearSurahAudio } =
  quranAPP.actions;

export default quranAPP.reducer;
