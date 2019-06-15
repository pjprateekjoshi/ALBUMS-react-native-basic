import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
    state = { albums: [] };

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums(){
        return(this.state.albums.map((singleAlbum, key) => <AlbumDetail key={key} album={singleAlbum} />));
    }

    render(){
        return (
            <ScrollView style={{ marginBottom: 100 }}>
                {this.renderAlbums()}
            </ScrollView>
        ); 
    }
}

export default AlbumList;
