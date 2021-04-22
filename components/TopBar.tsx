export interface TopBarProps {
  title: string;
  children: React.ReactNode;
}

export default function TopBar(props: TopBarProps) {
  return (
    <div className="h-12 w-full bg-teal-300 flex fixed top-0 right-0 left-0 items-center">
      <h1 className="font-bold text-2xl m-auto ml-2">{props.title}</h1>
      <div className="flex-grow" />
      <div className="m-2">{props.children}</div>
    </div>
  );
}
