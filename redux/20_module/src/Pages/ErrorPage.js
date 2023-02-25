import MainNavigation from "../Components/MainNavigation";
function ErrorPage(){

        return (
            <>  
                <MainNavigation/>
                <main>
                    <h1>Error occured</h1>
                    <p>Could not find this page</p>
                </main>
            </>
        )
}
export default ErrorPage;