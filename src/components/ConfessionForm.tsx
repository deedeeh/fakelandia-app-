import React from 'react';

const ConfessionForm: React.FC = () => {
  return(
    <div className='content-container'>
      <form>
        <div>
          <label id='subject'>
            Subject:
            <input type='text' value='' />
          </label>
        </div>
        <div>
          <label>
            Reason for contact:
            <select value='' name='reason' id='reason'>
              <option value='select'>Select</option>
              <option value='lift'>Lift</option>
              <option value='vegetables'>Vegetables</option>
              <option value='rudeness'>Rudeness</option>
              <option value='united'>United</option>
              <option value='talk'>I just want to talk</option>
            </select>
          </label>
        </div>
        <div>
          <textarea value='' />
        </div>
      </form>
    </div>
  )
}

export default ConfessionForm;