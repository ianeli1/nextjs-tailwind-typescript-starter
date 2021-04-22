import { useEffect } from "react";

interface ModalProps extends WindowProps {
  show: boolean;
}

export default function Modal(props: ModalProps) {
  function closeOnEsc(e: KeyboardEvent) {
    e.key === "Escape" && props.onClose();
  }

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEsc);
    return () => {
      document.body.removeEventListener("keydown", closeOnEsc);
    };
  });

  if (!props.show) return null;

  return (
    <div
      className="fixed top-0 bottom-0 right-0 left-0 bg-blue-900 bg-opacity-50 flex items-center justify-center z-50"
      onClick={props.onClose}
    >
      <Window title={props.title} onClose={props.onClose}>
        {props.children}
      </Window>
    </div>
  );
}

interface WindowProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

function Window(props: WindowProps) {
  function stopPropag(e: any) {
    e.stopPropagation();
  }

  return (
    <section className="rounded-lg bg-white w-4/5 h-auto" onClick={stopPropag}>
      <div className="flex border-b-2 border-gray-800 items-center p-4">
        <h3 className="flex-grow">{props.title}</h3>
        <button
          className="font-light text-4xl m-0 leading-none"
          onClick={props.onClose}
        >
          x
        </button>
      </div>
      <div className="p-4">{props.children}</div>
    </section>
  );
}
