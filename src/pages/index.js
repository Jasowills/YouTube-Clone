import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Sidebar from "../components/Sidebar"
import Header from '../components/Header'
export default function Home() {
  return (
    <div className="">
       <Sidebar/>
    </div>
  )
}
