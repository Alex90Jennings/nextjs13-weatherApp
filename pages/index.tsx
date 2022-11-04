import { Paper, Text, TextInput, Button, Group } from '@mantine/core'
import type { NextPage } from 'next'
import { useState } from 'react'

const API_KEY = "70f36b3f5a180a668c78ff2ba93c0038"

const Home: NextPage = () => {
  const[ cityInput, setCityInput ] = useState('')
  const [ weatherData, setWeatherData ] = useState<any>({})

  const getWeatherData = async () => {
    try {
      const res = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?" +
        "q=" +
        cityInput +
        "&appid=" +
        API_KEY +
        "&units=metric"
      )
      const data = await res.json()
      setWeatherData(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div style={{
      position: 'static',
      height: '100vh',
      backgroundImage: 'url("https://littlevisuals.co/images/atlantic_ridge.jpg")',
      backgroundSize: 'cover'
    }}>
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <Paper withBorder p='lg' style={{maxWidth: '500px'}}>
          <Group position='apart'>
            <Text size='xl' weight={500}>
              Get The Weather!
            </Text>
          </Group>
          <Group position='apart'>
            <Text size='lg'>
              Enter a city, and get the weather below!
            </Text>
          </Group>
          <Group position='apart' mb='xs'>
            <TextInput 
              label='City Name' 
              placeholder='ex. London'
              onChange={(e) => setCityInput(e.target.value)}
              />
          </Group>
          <Group position='apart'>
            <Button 
              variant='gradient' 
              size='md'
              onClick={() => getWeatherData()}>
              Get Weather
            </Button>
          </Group>
          {Object.keys(weatherData).length !== 0 ? 
            <>
              <Group position='left'>
                <Text>
                  {weatherData.name} Weather
                </Text>
                <Text size={"lg"} weight={500}>
                  <img 
                    src={"http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@4x.png"} 
                    alt="weather icon" 
                    width={"100px"}
                    height={"100px"}
                  />
                  It is currently {weatherData.main.temp} &deg;C
                </Text>
              </Group>
            </>
            : null
          }
        </Paper>
      </div>
    </div>
  )
}

export default Home
