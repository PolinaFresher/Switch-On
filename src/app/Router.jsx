import { Route, Routes, } from 'react-router-dom'
import { ROUTES } from 'shared/consts'

import { Home, Player, Playlist, NotFound, MusicLibrary, Favourites, Settings } from 'pages'



function Router() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.PLAYER} element={<Player />} />
            <Route path={ROUTES.PLAYLISTFAVORITES} element={<Favourites />} />
            <Route path={"/playlist/:list"} element={<Playlist />} />
            <Route path={ROUTES.MUSICLIBRARY} element={<MusicLibrary />} />
            <Route path={ROUTES.SETTINGS} element={<Settings />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Router