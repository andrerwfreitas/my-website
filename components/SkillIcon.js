const SkillIcon = ({skill}) => {
  return <img src={`https://skillicons.dev/icons?i=${skill}`} alt={skill} className="size-10" title={skill} />;
}

export default SkillIcon;