import React from 'react';
import Header from './components/Header';
import AddSong from './components/AddSong';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';
import { Grid, useMediaQuery } from '@material-ui/core';


export const SongContext = React.createContext({
  song: {
    id: "cf9423d1-3461-47c5-83d0-d233e49f8c08",
    title: 'SickFlip & Ritviz - Roshni feat. Seedhe Maut',
    artist: 'asd',
    thumbnail: 'http://img.youtube.com/vi/cAQVYXwiWi0/0.jpg',
    url: 'https://www.youtube.com/watch?v=cAQVYXwiWi0',
    duration: 187
  },
  isPlaying: false
})

function App() {
  const initialSongState = React.useContext(SongContext)
  const [state, dispatch] = React.useReducer(() => {}, initialSongState)    
  const greaterThanSm = useMediaQuery( theme => theme.breakpoints.up('sm'))
  const greaterThanMd = useMediaQuery( theme => theme.breakpoints.up('md'))

  return (
    <SongContext.Provider value={{ state, dispatch }}>
     { greaterThanSm && <Header />}
     <Grid container spacing={3}>
      <Grid style={{
        paddingTop: greaterThanSm ? 80 : 20 
       }} item xs={12} md={7}>
      <AddSong />
      <SongList />
      </Grid>
      <Grid style={
        greaterThanMd ? { 
        position: 'fixed',
        width: '100%',
        right: '0',
        top: 70
      } : {
        position:'fixed',
        width: '100%',
        left: 0,
        bottom: 0
      }} item xs={12} md={5}>
      <SongPlayer />
      </Grid>
    </Grid>
    </SongContext.Provider>
  );
}

export default App;
