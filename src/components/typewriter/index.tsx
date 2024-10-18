import useTypewriter from "@hooks/useTypingEffect";

interface TypewriterProps {
  text: string; 
  speed: number; 
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);

  return <p>{displayText}</p>;
};

export default Typewriter;
