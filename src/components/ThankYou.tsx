import '../styles/confession.css';

const ThankYou: React.FC<{confessionCitizenId: number}> = ({ confessionCitizenId }) => {
  return (
    <>
      <p className='conf-paragraph'>Thank you for your confession.</p>
      <p className='conf-paragraph'>You can now check your misdemeanour details with your id of {confessionCitizenId}</p>
    </>
  )
}

export default ThankYou;