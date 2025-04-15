import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext<any>(null);
const CurrentUserContext = createContext<any>(null);

export default function AppContext() {
  const [theme ,setTheme] = useState("dark");
  const [currentUser ,setCurrentUser] = useState({id: 1,name: 'gamal', });
  
  return (
    <>
      <MyProviders theme={theme} setTheme={setTheme} currentUser={currentUser} setCurrentUser={setCurrentUser}>
        <Form />
        <FormSelect />
      </MyProviders>

    </>
  )
}
interface MyProvidersProps 
{
  children: React.ReactNode,
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>,
  currentUser: any,
  setCurrentUser: React.Dispatch<React.SetStateAction<any>>
}
  
function MyProviders({children,theme,setTheme,currentUser,setCurrentUser}: MyProvidersProps) {
  return (
    <>
    <ThemeContext.Provider value={{theme,setTheme}}>
      <CurrentUserContext.Provider value={{currentUser,setCurrentUser}}>
        {children}
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
    </>
  )
}
function FormSelect(){
  const {theme,setTheme} = useContext(ThemeContext);
  console.log('theme from form input: ',theme);
  
  const className = 'input-' + theme;
  return (
   <>
   <select name="" onChange={(e) => setTheme(e.target.value)} id="">
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
      </select>
   </>
  )
}
function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }: { title: string, children: React.ReactNode }) {
  const {theme} = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }: { children: React.ReactNode }) {
  const {theme} = useContext(ThemeContext);
  const {currentUser} = useContext(CurrentUserContext);
  console.log({theme,currentUser});
  
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}
