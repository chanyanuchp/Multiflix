import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    // const movies = [
    //   {id:0, poster_src:"https://scontent.fbkk2-2.fna.fbcdn.net/v/t1.0-9/20841916_1535473193176887_2167621013389612117_n.jpg?_nc_cat=0&_nc_eui2=AeGvKu7G_wha5h48uThPFoQR359zFVRZE4jAvjVwBxCVGUf9F0DpgOqNIFm3pSY58NA3CwGfUnJ1Wulx1yEockGfypsRIV3Gej9l12x0j-Y2uA&oh=72f1d99b9f7f939074d1faf727abb1aa&oe=5B903653", title: "Avenger: Infinity War", overview: "dfsdgfdgdfgdfgdfgdfg"}
    // ]

    // var movieRows = []

    // movies.forEach((movie) => {
    //   console.log(movie.title)
    //   const movieRow = <MovieRow movie={movie}/>
      
    //   movieRows.push(movieRow)
    // })

    // this.state = {rows : movieRows}

    this.performSearch()
  }

  performSearch() {
    console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query="
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        // console.log(searchResults)
        const results = searchResults.results
        // console.log(result[0])

        results.forEach()
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="100" src="multiflix-logo.png"/>
              </td>
              <td width="8">
                <h2>Multiflix</h2>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} placeholder="Enter search term"/>

        {this.state.rows}
      
      </div>
    );
  }
}

export default App;
