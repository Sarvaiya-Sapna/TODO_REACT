function View()
{
     const newval = JSON.parse(localStorage.getItem('new-list'));
     console.log(newval);

    return(
        <h1>{newval}</h1>
    )
}

export default View;