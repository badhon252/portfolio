export default function Button(props: { value: string; text: string }) {
  return (
    <button
      className={`m-4 px-4 py-2 hover:px-8 hover:me-3 border rounded border-green-900 text-lg font-semibold shadow-2xl hover:shadow-lime-500/20 ${props.value}`}
    >
      {props.text}
    </button>
  );
}
