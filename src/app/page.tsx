export default function Home() {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-3xl md:text-4xl font-bold mb-5">
        Next.js beginner + MongoDB CRUD Example Tutorial
      </h1>
      <p className="max-w-[750px] mx-auto leading-8">
        Welcome to basic crud methods with Next.js and Mongoose.
      </p>
      <p>
        We’ll create a basic interface to manage a list of items stored in a
        MongoDB collection.
      </p>

      <br />
      <br />

      <ul>
        <h2 className="text-2xl md:text-3xl font-bold mb-5">Prerequisites</h2>
        <li>Basic knowledge of Next.js.</li>
        <li>Basic knowledge of Mongoose.</li>
        <li>Node.js and npm/yarn installed.</li>
        <li>
          MongoDB installed locally or MongoDB Atlas account set up for a cloud
          database.
        </li>
      </ul>
    </main>
  );
}
