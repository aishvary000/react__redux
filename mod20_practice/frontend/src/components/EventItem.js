import classes from './EventItem.module.css';
import { Link, useSubmit } from 'react-router-dom';

function EventItem({ event }) {
  //usesubmit is use to submit data programitically,we could have used form
  //insted but form wouldnt allow to prompt us to delete the data
  const submit = useSubmit()
  function startDeleteHandler() {
    // ...
    const res = window.confirm("Are you sure you want to delete");
    if(res)
    {
      submit(null,{method:'delete'})
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
