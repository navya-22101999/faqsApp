import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div>
      <div>
        <h1>FAQs</h1>
        <ul>
          {faqsList.map(eachFAQ => (
            <FaqItem key={eachFAQ.id} faqDetails={eachFAQ} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
