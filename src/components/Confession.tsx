import React from 'react';
import '../styles/confession.css';
import ConfessionForm from './ConfessionForm';

const Confession: React.FC = () => 
  <main className='content-container'>
    <p className='conf-paragraph'>It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.</p>
    <p className='conf-paragraph'>However, if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!</p>
    <ConfessionForm />
  </main>

export default Confession;