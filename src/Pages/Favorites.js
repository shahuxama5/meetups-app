import {useContext} from 'react';
import MeetupList from '../Components/Meetups/MeetupList';
import FavoritesContext from '../Store/Favorites-Context';

function FavoritesPage() {

    const favoritesCtx = useContext(FavoritesContext);

    let context;

    if (favoritesCtx.totalFavorites === 0) {
        context = <p>No Favorites Yet</p>
    }
    else {
        context = <MeetupList meetups={favoritesCtx.favorites} />
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {context}
        </section>
    )
}

export default FavoritesPage;