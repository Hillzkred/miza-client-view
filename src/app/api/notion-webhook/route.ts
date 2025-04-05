export async function GET() {
  const foo = "hello";
  return new Response(JSON.stringify({ message: foo }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
