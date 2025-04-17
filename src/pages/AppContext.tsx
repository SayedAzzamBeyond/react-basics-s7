import { createContext, useContext, useState } from 'react';
import { ThemeProvider, useThemeContext } from '../context/ThemeContext';
import { UserProvider, useUserContext } from '../context/UserContext';


export default function AppContext() {
  
  return (
    <>
      <Form />
      <FormSelect />
    </>
  )
}
interface MyProvidersProps 
{
  children: React.ReactNode,
  // theme: string,
  // setTheme: React.Dispatch<React.SetStateAction<string>>,
  // currentUser: any,
  // setCurrentUser: React.Dispatch<React.SetStateAction<any>>
}
  
export function MyProviders({children}: MyProvidersProps) {
  return (
    <>
      <ThemeProvider>
        <UserProvider>
          {children}
        </UserProvider>
      </ThemeProvider>
    </>
  )
}
function FormSelect(){
  const {theme,setTheme} = useThemeContext();
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
  const {theme} = useThemeContext();
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }: { children: React.ReactNode }) {
  const {theme} = useThemeContext();
  const {currentUser} = useUserContext();
  console.log({theme,currentUser});
  
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}
