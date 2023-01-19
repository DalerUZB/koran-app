import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import JuzReed from "./Components/JuzReed";
import Navbar from "./Components/Navbar";
import Ayah from "./Pages/Ayah";
import Home from "./Pages/Home";
import Juz from "./Pages/Juz";
import NamesLord from "./Pages/NamesLord";
import Surah from "./Pages/Surah";
import SurahByIdName from "./Pages/SurahByIdName";
import Tasbeh from "./Pages/Tasbeh";

function App() {
  const darkTheme = {
    backgrounColor: "rgb(4, 0, 0)",
    color: "rgb(200, 189, 189)",
    transition: "0.3s",
  };
  const ligthTheme = {
    backgrounColor: "hsl(0, 7%, 92%)",
    color: "#000",
    transition: "0.4s",
  };

  const themes = {
    light: ligthTheme,
    dark: darkTheme,
  };
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeProvider theme={themes[theme]} setTheme={setTheme}>
        <Navbar setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/juz" element={<Juz />} />
          <Route path="/surah" element={<Surah />} />
          <Route path="/ayah" element={<Ayah />} />
          <Route path="/tasbeh" element={<Tasbeh />} />
          <Route path="/names" element={<NamesLord />} />
          <Route path="/surahname/:id" element={<SurahByIdName />} />
          <Route path="/surahByJuz/:idJuz" element={<JuzReed />} />
          <Route
            path="*"
            element={
              <>
                <h1>not found</h1>
              </>
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
