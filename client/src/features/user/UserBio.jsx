function UserBio() {
  return (
    <div className="flex flex-col items-center bg-yellow-100">
      <img
        className="mx-10 mb-4 mt-7 w-40 rounded-2xl border border-stone-300 shadow-sm"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBmYWNlfGVufDB8fDB8fHww"
      />
      <h3 className="text-l mb-4 font-semibold">Welcome @wellness!</h3>
      <form className="flex flex-col">
        <label className="text-sm">Profile Image URL:</label>
        <input
          className="rounded-md px-2 placeholder:px-3 placeholder:text-sm placeholder:text-stone-500"
          type="text"
          placeholder="image url..."
        />

        <button className="rounded-2xl bg-yellow-300 text-sm uppercase">
          Add image
        </button>
      </form>
    </div>
  );
}

export default UserBio;
