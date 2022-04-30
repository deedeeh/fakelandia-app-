const ErrorMessage: React.FC<{message: string}> = ({ message }) => 
  <div>
    <p className='error-message'>{message}</p>
  </div>

export default ErrorMessage;