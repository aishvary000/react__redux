import { json,redirect,useRouteLoaderData} from "react-router-dom";
import EventItem from '../components/EventItem';
function EventDetailPage() {
    const data = useRouteLoaderData('event-detail');
    return(
        <EventItem event={data.event}/>
    )
}
export default EventDetailPage;
export async function loader({request,params})
{
    //i cant use params here
    const id = params.id;
    const response = await fetch(`http://localhost:8080/events/${id}`);
    if(!response.ok)
    {
        throw json({message:'could not fetch data for selected item'},{status:500});
    }
    return response;

}
export async function action({request,params})
{
    const id = params.id;
    console.log("id is : "+id);
    const response = await fetch('http://localhost:8080/events/'+id,{
        method:request.method
    });
    if(!response.ok)
    {
        throw json({message:"Could not delete item"},{
            status:500
        });
    }
    return redirect('/events');

}