
export default async function Page() {
  let response = await fetch('http://127.0.0.1:8000/api/usuarios/');
  let data = await response.json();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">API</h1>
      <button>Usuarios</button>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}