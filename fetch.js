const fetchAlbums = async () => {
  const res = await fetch("https://reduxblog.herokuapp.com/api/posts")
  const json = await res.json()
  console.log(json);
}

fetchAlbums();