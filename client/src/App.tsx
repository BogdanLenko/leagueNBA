import './App.css'
import {Sign_in} from "./pages";
import {TeamFullCard} from './components'

export function App() {
  return(
        <>
            <Sign_in></Sign_in>
            <TeamFullCard name={'Artem'} division={'Germany'} foundationYear={2009} />
        </>
    )
}


