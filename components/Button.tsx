interface ButtonProps {
  children: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button className="rounded-lg p-2 text-3xl bg-blue-400 text-white">
      {props.children}
    </button>
  );
}
