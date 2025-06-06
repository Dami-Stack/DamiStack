interface SkillCardProps {
  icon: React.ReactNode;
  label: string;
  level?: string;
}

export const SkillCard = ({ icon, label, level }: SkillCardProps) => {
  return (
    <div className="relative flex flex-col cursor-pointer items-center justify-center space-y-2 border border-teal-500 w-max min-w-[150px] p-2 rounded-md hover:bg-teal-500 group">
      {icon}
      <span>{label}</span>
      {level && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
          <span className="text-teal-400 font-bold text-lg">{level}</span>
        </div>
      )}
    </div>
  );
};
