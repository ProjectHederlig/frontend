import  { useEffect, useState } from 'react'
import TosCard from '../components/TosCard'

const TermsOfServices = () => {
  const [toss, setToss] = useState([])

  const getToss = async () => {
    const res = await fetch('https://termsofservice-gtghh4fycbfkaeej.swedencentral-01.azurewebsites.net/api/tos')

    if (res.ok) {
      const data = await res.json()
      setToss(data)
    }
  }
  useEffect(() => {
    getToss()
  }, [])

  return (
    <div className='tos-container'>
      {toss.map(tos => (
        <TosCard key={tos.id} tos={tos} />
      ))}
    </div>
  )
}

export default TermsOfServices