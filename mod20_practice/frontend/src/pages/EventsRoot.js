import { Outlet } from 'react-router-dom';
import EventNavigation from '../components/EventsNavigation';
function EventRoot() {
    return (
        <>
            <EventNavigation/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}
export default EventRoot;