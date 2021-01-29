import React from 'react';
import Intro from './components/Intro';
import About from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';


const getTheme=()=>{
  let theme='';
  if(sessionStorage.getItem('theme'))
  {
    theme=sessionStorage.getItem('theme');
    return theme;
  }
  return theme;
}
function App() {
  const [theme,setTheme]=React.useState(getTheme());
  
  React.useEffect(()=>{
    document.documentElement.className=theme;
    sessionStorage.setItem('theme',theme);
  },[theme]);

  return (
    <>
    <div className="App" id="App">
      <Intro setTheme={setTheme}/>
      <About/>
      <Projects/>
      <Contact/>
  </div>
  </>
  );
}

export default App;
