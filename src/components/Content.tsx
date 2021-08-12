import { List, AutoSizer, ListRowRenderer, Size } from 'react-virtualized';
import { MovieCard } from "./MovieCard";
// import 'react-virtualized/styles.css'; // only needs to be imported once
interface ContentProps {
  selectedGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  };

  movies: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>;
}



export function Content({ selectedGenre, movies }: ContentProps) {

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    const moviesList = movies[index];
    return (
      <div key={key} style={style} >
        <MovieCard movie={moviesList} />
      </div>
    );
  }

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>

        <div style={{ width: "100%", height: "100vh" }}>
          <AutoSizer>
            {({ width, height }: Size) => (
              <List
                width={width}
                height={height}
                // autoHeight
                className="movies-list"
                rowHeight={500}
                overscanRowCount={6}
                rowCount={movies.length}
                rowRenderer={rowRenderer}
              />
            )}
          </AutoSizer>
        </div>

        {/* <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div> */}
      </main>
    </div>
  )
}
