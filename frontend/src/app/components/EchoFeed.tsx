import EchoReplyCard from "./EchoReplyCard";

const echoes = [
  { user: "Echo Bubbe", title: "Morning reflections", mood: "reflective" },
  { user: "Ethan", title: "A quick update", mood: "chill" },
  { user: "Emma", title: "Late night thoughts", mood: "hype" }
];

export default function EchoFeed() {
  return (
    <div className="space-y-4">
      {echoes.map((echo, idx) => (
        <EchoReplyCard key={idx} {...echo} />
      ))}
    </div>
  );
}
export default function EchoFeed() {
  return (
    <div>
      <h2>EchoFeed Component</h2>
      <p>This is a placeholder for your feed content.</p>
    </div>
  )
}

