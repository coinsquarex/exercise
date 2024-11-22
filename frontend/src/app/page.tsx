import { Table } from '../components'
import type { Balance } from '../types'

export default async function Home() {
  const data = await fetch('http://localhost:3001/api/v1/user/balance')
  const balances: Array<Balance> = await data.json()

  return (
    <main>
      <Table balances={balances} />
    </main>
  )
}
