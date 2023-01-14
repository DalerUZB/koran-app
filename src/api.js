import axios from "axios";
import { toast } from "react-toastify";
class Api {
  async fetchSurahApi() {
    try {
      const result = await axios.get("http://api.alquran.cloud/v1/surah");
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  async fetchSurahByName(id) {
    try {
      const result = await axios.get(`http://api.alquran.cloud/v1/surah/${id}`);
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  async fetchSurahAudio(id) {
    try {
      const result = await axios.get(
        `http://api.alquran.cloud/v1/surah/${id}/ar.alafasy`
      );
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  async fetchSurahTranslation(id) {
    try {
      const result = await axios.get(
        `https://api.alquran.cloud/v1/surah/${id}/uz.sodik`
      );
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  async fetchSurahByJuz(id) {
    try {
      const result = await axios.get(
        `https://api.alquran.cloud/v1/juz/${id}/quran-uthmani`
      );
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  async fetchJuzUZ(id) {
    try {
      const result = await axios.get(
        `http://api.alquran.cloud/v1/juz/${id}/uz.sodik`
      );
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  async fetchAyah(number) {
    try {
      const result = await axios.get(
        `http://api.alquran.cloud/v1/ayah/${number}`
      );
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  async fetchAyahUZ(number) {
    try {
      const result = await axios.get(
        `http://api.alquran.cloud/v1/ayah/${number}/uz.sodik`
      );
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  async fetchAyahAudio(id) {
    try {
      const result = await axios.get(
        `http://api.alquran.cloud/v1/ayah/${id}/ar.alafasy`
      );
      return result.data.data
    } catch (error) {
      console.log(error);
    }
  }
  async fetchTaqvimNamaz(body) {
    try {
      const result = await axios.get(
        `https://islomapi.uz/api/present/day?region=${body}`
      );
      return result.data;
    } catch (error) {
      toast.info("notugri bosildi");
    }
  }
}
export const api = new Api();
