/* styles imports */
import './main.css';

/* imports components */
import Header from '../header/header';
import Search from '../search/search';
import Slide from '../slide/slide';


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
