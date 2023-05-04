import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';



const WeatherCard  = (props) => {

    // const [coun, setCoun]= useState("");
    console.log(props.loc);

    const kelvinTemperature =273 ;


    // useEffect(()=>{
    //     axios.get(`https://api.unsplash.com/search/photos?query=${props.location}&client_id=NDtHbGrynjfkc9e2wiwz0mSFo79XwoZknHXDDXwRb5A`).then((res)=>{
    //       console.log(res?.data?.results?.urls?.raw);
    //       setCoun(res?.data?.results?.urls?.raw);
    //      })
    //   },[props.location])

    const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    // console.log(props.details);
    // console.log(props?.details?.weather);

    const value=props?.details?.weather ?? '';
    // console.log(value);

    const description = value[0]?.description ?? '';
    // console.log(description);
    

  return (
    <div>
     <Card variant="outlined" style={{justifyContent:"center", marginLeft: "470px"}} sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
      {props?.details?.name}
      </Typography>
      <Typography level="h5">Dated: {date} </Typography>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        
      </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src={props?.loc}
          // srcSet="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
        
            {<h3 style={{border:"1px solid whitesmoke",borderRadius:"5px", marginLeft:"120px"}}>{description.includes('clear sky') || description.includes('clear') || description.includes('sunny') ? ' Sunny ☀' : ' Cloudy🌧'}</h3>
}
         
          <Typography style={{marginLeft:"100px"}} level="body3">Temperature: <b> {( props?.details?.main?.temp- kelvinTemperature).toFixed(2)} </b>; </Typography>
          <Typography style={{marginLeft:"100px"}} level="body3">Min Temperature: {(props?.details?.main?.temp_min- kelvinTemperature).toFixed(2)}</Typography>
    
          <Typography style={{marginLeft:"100px"}} level="body3">Maximum temperature: {(props?.details?.main?.temp_max - kelvinTemperature).toFixed(2)}</Typography>

          
         
        </div>
      
      </Box>
    </Card>
    </div>
  );
}

export default WeatherCard;
