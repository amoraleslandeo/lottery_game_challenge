import { Card } from "@/components/Card/Card";
import { TDraws } from "@/types/types";
import { Box } from "@mui/material";

const Home = async () => {
  // Fetches draws from the api
  const url = 'https://interview-api.lottobillions.com/draws';
  const res = await fetch(url, { headers: { 'accept': 'application/json' } });

  // Error message if the response was not successful
  if (!res.ok) {
    alert('Error al cargar los datos');
  }

  // convert the response data into JSON format
  const drawsInfo: TDraws[] = await res.json();

  return (
    <Box
      component='main'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: '40px',
        maxWidth: '1200px',
        height: '100%',
        m: '0px auto',
      }}
    >
      <Box
        component='div'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          gridRowStart: 2
        }}
      >
        {drawsInfo.map((draw) => {
          return <Card
            key={draw.id}
            image={draw.logo}
            name={draw.name}
            price={draw.jackpot.amount}
            id={draw.id} />
        })
        }
      </Box>
    </Box>
  );
}

export default Home