import './styles/style.scss';
import Header from "./Components/Header/header";
import HomeBanner from "./Components/Banners/IndexBanner";
import React from 'react';
import Profile from './Components/Profile/profile';
import Skills from './Components/Skills/Skills';
import { useDarkMode } from './style/DarkMode';
import { GlobalStyles, LightTheme, DarkTheme } from './style/GlobalStyles';
import styled, {ThemeProvider} from 'styled-components';
function App() {
  const [ theme, ToggleTheme ] = useDarkMode();
  const ThemeMode = theme === 'light' ? LightTheme : DarkTheme;
  return (
    <ThemeProvider theme={ThemeMode}>
    <div className="PageBody" >
    <GlobalStyles/>
      <div id="particle-canvas"></div>
    <Header theme={theme} ToggleTheme={ToggleTheme}/>
    <HomeBanner/>
    <section className='body'>
    <Profile/>
    <Skills/>
    </section>
    </div>
    </ThemeProvider>
  );
};

export default App;
