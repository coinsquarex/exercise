
export default async function Home() {
  let data = await fetch('http://localhost:3001/api/v1/user/balance')
  let balances = await data.json()
  return (
    <div className="grid items-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2">
          <table className="table-fixed">
            <caption className="caption-top">
              User balance
            </caption>
            <thead>
              <tr className="items-center">
                <th>Coin</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>

              {balances.map((balance: any) => (
                <tr className="items-center">
                  <td>{balance.coin}</td> 
                  <td>{balance.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </main>
    </div>
  );
}
