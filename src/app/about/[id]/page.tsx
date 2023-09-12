
export default function AboutWithParam({params}:any) {
  console.log(params);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World - parameters {params.id}</h1>
    </main>
  )
}
