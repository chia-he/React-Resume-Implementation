const genderMap = {
  male: '男',
  female: '女',
  neutrality: '中立',
  none: '',
};

function Previewer(props) {
  const { name, skills, gender } = props;
  return (
    <div className="previewer">
      <section>{name}</section>
      <section>
        {genderMap[gender] && (
          <p className="gender">性別: {genderMap[gender]}</p>
        )}
      </section>
      <section>
        <h2>專業技能</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={skill.id}>{skill.text}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
export default Previewer;
