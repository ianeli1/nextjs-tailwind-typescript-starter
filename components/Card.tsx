export interface CardProps {
  title?: string;
  subtitle?: string;
  desc?: string;
  photo?: string;
  right?: React.ReactNode;
}

export default function (props: CardProps) {
  return (
    <div className="p-4 rounded shadow bg-white relative m-2 mb-4 h-64">
      {props.photo && (
        <img
          src={props.photo}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}
      <section className="bg-white bg-opacity-75 absolute bottom-0 left-0 right-0 p-4 flex">
        <div className="flex-grow">
          {props.title && <h3>{props.title}</h3>}
          {props.subtitle && <h4>{props.subtitle}</h4>}
          {props.desc && <p>{props.desc}</p>}
        </div>

        {props.right && <div className="">{props.right}</div>}
      </section>
    </div>
  );
}
