import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import './App.scss';

const App = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  return (
    <div className="main">
      <button className="main__button" onClick={() => setModalActive(true)}>Налоговый вычет</button>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  )
}

export default App

