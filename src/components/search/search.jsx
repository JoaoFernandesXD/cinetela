/* imports styles */

import './search.css';



function Search(){
    return(
       <div className='container__search'>
        <p>Busque e voilà, encontre a diversão</p>
        <div className='button_navegar'>NAVEGAR</div>
        <input placeholder="Pesquise por filmes, séries ou documentários"></input>
       </div>
    )
}

export default Search;