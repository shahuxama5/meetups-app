import classes from "./MeetupItem.module.css";
import Card from "../UI/Card";
import {useContext} from 'react';
import FavoritesContext from "../../Store/Favorites-Context";

function MeetupItem(props) {

  const favoriteCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if(itemIsFavorite){
      favoriteCtx.removeFavorite(props.id);
    }
    else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        address: props.address
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.meetup.image} alt={props.meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
