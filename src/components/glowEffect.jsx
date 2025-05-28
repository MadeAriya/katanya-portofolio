export default function BottomLeftGlow() {
  return (
    <div
      className="fixed bottom-0 left-0 w-[400px] h-[400px] pointer-events-none filter blur-3xl opacity-70 z-1"
      style={{
        background:
          "radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.6) 0%, #1d1d1f 80%)",
        borderBottomLeftRadius: "50%",
        borderTopRightRadius: "100%",
      }}
    />
  );
}
