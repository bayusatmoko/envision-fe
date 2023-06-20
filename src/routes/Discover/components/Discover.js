import React, { useEffect, useState } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import { getNewReleasesApi, getFeaturedPlaylistApi, getCategoriesApi } from '../../../service/api/spotify';

const Discover = () => {
  const [newReleases, setNewReleases] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [categories, setCategories] = useState([])

  const getNewReleases = async () => {
    const releases = await getNewReleasesApi()
    return releases
  }

  const getFeaturedPlaylist = async () => {
    const playlists = await getFeaturedPlaylistApi()
    return playlists
  }

  const getCategories = async () => {
    const categories = await getCategoriesApi()
    return categories
  }

  useEffect(() => {
    Promise.all([
      getNewReleases().then(releases => setNewReleases(releases)),
      getFeaturedPlaylist().then(playlists => setPlaylists(playlists)),
      getCategories().then(categories => setCategories(categories))
    ])
  }, [])

  return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
}

export default Discover
