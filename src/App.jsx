import { useState, useEffect } from 'react';
import Previewer from './Previewer';
import Editor from './Editor';
import './App.scss';

function useResume() {
  const [name, setName] = useState('');
  const [skills, setSkills] = useState([]);
  const [gender, setGender] = useState('');

  const [isAlreadyLoad, setIsAlreadyLoad] = useState(false);

  useEffect(() => {
    const loadedName = localStorage.getItem('name') || '';
    setName(loadedName);
    const loadedSkills = JSON.parse(localStorage.getItem('skills') || '[]');
    setSkills(loadedSkills);
    const storedGender = localStorage.getItem('gender') || '';
    setGender(storedGender);

    setIsAlreadyLoad(true);
  }, []);

  useEffect(() => {
    if (!isAlreadyLoad) {
      return;
    }

    localStorage.setItem('name', name);
    localStorage.setItem('gender', gender);
    localStorage.setItem('skills', JSON.stringify(skills));
  }, [name, gender, skills]);

  return {
    name,
    setName,
    gender,
    setGender,
    skills,
    setSkills,
  };
}
function App() {
  const { name, setName, gender, setGender, skills, setSkills } = useResume();

  return (
    <div className="app">
      <Editor
        name={name}
        setName={setName}
        skills={skills}
        setSkills={setSkills}
        gender={gender}
        setGender={setGender}
      />
      <Previewer name={name} skills={skills} gender={gender} />
    </div>
  );
}

export default App;
