import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventPage() {
    return(
       <EventForm/>
    )
}
export default NewEventPage;
export async function action({request,params}){
    const data = await request.formData();

    const eventData = {
        title:data.get('title'),
        description:data.get('description'),
        date:data.get('date'),
        image:data.get('image')
    }
    console.log("HEREEE...");
    const response = await fetch('http://localhost:8080/events',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(eventData)
    });
    if(!response.ok)
    {
        throw json({message:"Failed to add evnt"},{status:500});
    }
    return redirect('/events');
    
}