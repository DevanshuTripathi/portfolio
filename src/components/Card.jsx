import { useEffect, useState } from 'react';

function Card(props) {

    const [img, setImage] = useState('');

    const urlimg = `https://api.github.com/repos/DevanshuTripathi/${props.name}/contents/thumbnail.png`;

    useEffect(() => {
        fetch(urlimg)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
        })
        .then(data => {
            console.log(data.download_url);
            setImage(data.download_url);
        })
        .catch((error) => {
            console.log(error);
        })
    },[urlimg])

    return (
        <div className=" hover:bg-gray-800 md:hover:bg-gray-800  text-white text-center border rounded-xl p-5 proj-border ">
            <img src={img} className='w-full max-h-80 hover:shadow-none image' />
            <p className=" hidden md:block text-lg md:text-xl font-bold hover:shadow-none mt-6">{props.name}</p>
            <br />
            <p className="hidden md:block text-lg hover:shadow-none">{props.desc}</p>
            <div className="hidden md:block link hover:shadow-none" >
                <ul className="flex flex-row justify-center md:justify-end list-none hover:shadow-none">
                    <a href={props.url} target="_blank" className="hover:shadow-none" >Go to repo</a>
                </ul>
            </div>
        </div> 
    )
}

export default Card;