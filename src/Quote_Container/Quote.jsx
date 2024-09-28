import styles from './Quote.module.css'
import Quotes from './quote-list.json'

const Quote =  () => {
  return(
    <div className={styles.quote_list}>
      {
        Quotes.map((quote, index) => (
          <div key={index + "01"} className={styles.m24}>
            <h5>{quote.text}</h5>
            <p>{quote.author}</p>
          </div>
        ))
      }
    </div>
  )}

export default Quote;