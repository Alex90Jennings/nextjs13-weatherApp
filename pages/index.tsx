import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Paper } from '@mantine/core'

export default function Home() {
  return (
    <div style={{
      position: "static",
      height: "100vh",
      background: "url('https://littlevisuals.co/images/atlantic_ridge.jpg')",
      backgroundSize: "cover"
    }}>
      <div style={{
        position: "absolute",
        left: "50%",
        right: "50%",
        transform: "translate(-50%, -50%)"
      }}>
        <Paper withBorder p="lg" style={{maxWidth: "500px"}}>

        </Paper>
      </div>
    </div>
  )
}
