function UserBio({ userData }) {
  return (
    <div className="flex flex-col items-center border-stone-600 bg-stone-100">
      <img
        className="mx-10 mb-4 mt-7 w-40 rounded-2xl border border-stone-300 shadow-md shadow-stone-400"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBmYWNlfGVufDB8fDB8fHww"
      />
      <h3 className="text-l mb-4 font-semibold">
        Welcome <span className="text-pink-400">@{userData.username}</span>
      </h3>
    </div>
  );
}

export default UserBio;
