import { useState } from 'react';

const genderOptions = [
  { label: '男', value: 'male' },
  { label: '女', value: 'female' },
  { label: '中立', value: 'neutrality' },
  { label: '不透露', value: 'none' },
];

function Editor(props) {
  const { name, setName, skills, setSkills, gender, setGender } = props;
  const [skillInputText, setSkillInputText] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleClearName = () => {
    setName('');
  };
  const handleChooseGender = (e) => {
    setGender(e.target.value);
  };
  const handleInputSkill = (e) => {
    setSkillInputText(e.target.value);
  };
  const handleAddSkill = () => {
    // skills.push(skillInputText);
    // 上述用法屬於致命錯誤，務必記得 FP 中任何變數皆為 const，哪怕是物件也一樣，你不應該修改它

    // 替每一個技能加上一個絕對不會重複的 ID，我這邊方便直接使用日期，更好的作法應該使用 UUID
    const newSkill = {
      id: Date.now(),
      text: skillInputText,
    };

    // 創建一個新的列表
    if (skillInputText != '') {
      const newSkills = [...skills, newSkill];
      setSkills(newSkills);

      // 重置輸入框
      setSkillInputText('');
    }
  };

  // 根據 ID 刪除技能
  const handleRemoveSkill = (skillId) => {
    // 建立一個新的陣列，而這個陣列沒有指定 id 的元素
    const newSkills = skills.filter((skill) => skill.id !== skillId);
    setSkills(newSkills);
  };

  return (
    <div className="editor">
      <input value={name} onChange={handleChangeName} />
      <button onClick={handleClearName}>清空</button>
      <div>
        {skills.map((skill) => (
          // key 只需要加在最外層的元素上即可
          <div key={skill.id}>
            <span>{skill.text}</span>
            <button onClick={() => handleRemoveSkill(skill.id)}>移除</button>
          </div>
        ))}
      </div>
      <input value={skillInputText} onChange={handleInputSkill} />
      <button onClick={handleAddSkill}>新增</button>

      <div>
        {genderOptions.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              value={option.value}
              onChange={handleChooseGender}
              checked={gender === option.value}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
}
export default Editor;
