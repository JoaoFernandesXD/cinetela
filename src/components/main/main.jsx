/* styles imports */
import './main.css';

/* imports components */
import Header from '../header/header';
import Search from '../Search/search';
import Slide from '../Slide/slide';


function Main() {
  return (
    <main>
      <Header />
      <Search />
      <Slide />
    </main>
  );
}

export default Main;
