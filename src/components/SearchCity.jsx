import {useState , useEffect} from 'react'

const SearchCity = ({setCurrCity}) => {

    const [city, setCity] = useState('');
    const [cityClick, setCityClick] = useState('Saharanpur');
    const cityIs = {cityClick} ;

    useEffect( () => {
        fetchData();
    }, [cityClick]);


    const fetchData = async ()  => {

        const getlonlat =  await fetch(`https://nominatim.openstreetmap.org/search?q=${cityClick}&format=json&limit=1
`);
        const getlonlatjson = await getlonlat.json();
        const lattitude = getlonlatjson[0]?.lat;
        const longtitude = getlonlatjson[0]?.lon;
        const longLat = [lattitude, longtitude];
        setCurrCity([...longLat]);
        setCity("");
    };


    return(
        <div className="search_btn">
            <input type="text" id='fa_search_btn_input' value={city} onChange={(e) => setCity(e.target.value)} />
            <button id='fa_search_btn' className='resBtn' onClick={() => {
                if(city.length > 0) {
                    setCityClick(city);
                }
            }}>Search City</button>
        </div>
    )

}

export default SearchCity;