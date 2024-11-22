import type { Balance } from '../types'

import styles from './table.module.css'

type Props = {
  balances: Array<Balance>
}

export function Table({ balances }: Props) {
  return (
    <div className={styles.table}>
      <div className={styles.thead}>
        <div className={styles.tr}>
          <div className={styles.th}>Coin</div>
          <div className={styles.th}>Balance</div>
        </div>
      </div>
      <div className={styles.tbody}>
        {balances.map((balance: Balance) => (
          <div key={balance.coin} className={styles.tr}>
            <div className={styles.td}>{balance.coin}</div>
            <div className={styles.td}>{balance.balance}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
