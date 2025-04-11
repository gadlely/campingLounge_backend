import Router from "../router/Router";


function Main({setAdminMode ,setMainPage, mainLayoutChange, setProfileChange}) {

    return(
        <>
            <Router
                setProfileChange={setProfileChange}
            />
        </>
    );
}

export default Main;