import { useEffect} from 'react'
import ColumnLayout from '../components/ColumnLayout'
import NavBar from '../components/NavBar'
import { attachWindowEventListeners } from '../assets/ts/util.ts';

function Home() {
    useEffect(() => {
    const timer = setTimeout(() => {
      attachWindowEventListeners();
    }, 0);
  });
  return (
    <>
      <NavBar/>
      <ColumnLayout/>
    </>
  )
}
export default Home;