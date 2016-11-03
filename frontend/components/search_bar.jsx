import React from 'react';
import SearchStore from '../stores/search_store';
import SearchActions from '../actions/search_actions';

let _querying = false;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._queryArtists = this._queryArtists.bind(this);
    this._onSearchChange = this._onSearchChange.bind(this);
    this._queryByArtistName = this._queryByArtistName.bind(this);
    this._show = this._show.bind(this);
    this._hide = this._hide.bind(this);
    this.state = {query: "", artists: [], showing: false};
  }

  componentDidMount() {
    this.searchListener = SearchStore.addListener(this._onSearchChange);
  }

  _onSearchChange() {
    this.setState({artists: SearchStore.allArtists()});
  }

  _onChange(e) {
    this.setState({query: e.target.value}, this._queryArtists);
  }

  _queryArtists() {
    SearchActions.searchArtists(this.state.query);
  }

  _queryByArtistName(e) {
    SearchActions.searchArtistName(e.target.textContent);
    this.setState({showing: !this.state.showing});
  }

  _show(e) {
    e.preventDefault();
    this.setState({showing: true});
  }

  _hide(e) {
    e.preventDefault();
    this.setState({showing: false});
  }

  render() {
    return (
      <div className="search-bar">
        <span>iTunes API Demo</span>
        <input type="text" value={this.state.query} onChange={this._onChange} placeholder="Search for an artist" onFocus={this._show} onBlur={this._hide} />
        <div className="dropdown" onMouseDown={e => e.preventDefault()}>
          {this.state.showing && this.state.artists.length ?
            <ul className="search-results">{
              this.state.artists.map(artist => {
                return <li key={artist.artistId} onClick={this._queryByArtistName}>{artist.artistName}</li>
              })
            }</ul> : ""}
        </div>
      </div>
    );
  }
}

module.exports = SearchBar;
