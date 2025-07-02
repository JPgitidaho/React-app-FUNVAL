import TeamGrid from "./components/TeamGrIds";


function App() {
  return (
    <main className="min-h-screen bg-slate-900 text-white ">
      <header className="px-4 py-10 max-w-6xl mx-auto">
    

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-10">
         
          <h1 className="text-4xl font-bold py-4 text-center md:text-left">
            The creative crew
          </h1>

         
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="uppercase text-2xl font-bold mb-2">Who we are</h2>
            <p className="text-gray-700 dark:text-gray-300 text-md max-w-xl">
              We are a team of creatively diverse, driven, innovative individuals working in various locations from the world.
            </p>
          </div>
        </div>
      </header>

      <section className="px-4 max-w-6xl mx-auto">
        <TeamGrid />
      </section>
    </main>
  );
}

export default App;
