import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50 pt-24 pb-10">
      <div className="mx-auto max-w-4xl px-4">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          {/* Cover */}
          <div className="h-48 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400" />

          <div className="relative px-6 pb-8">
            {/* Profile Header */}
            <div className="-mt-16 flex flex-col items-center">
              <Image
                src="/profile.png"
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full border-4 border-white object-cover"
              />

              <h1 className="mt-4 text-3xl font-bold text-slate-800">
                Rahul Sharma
              </h1>

              <p className="text-slate-500">
                Spiritual Seeker ✨
              </p>

              <button className="mt-4 rounded-xl bg-orange-500 px-5 py-2 text-white transition hover:bg-orange-600">
                Edit Profile
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-orange-50 p-5 text-center">
                <h3 className="text-3xl font-bold text-orange-600">
                  45
                </h3>
                <p className="text-slate-600">Meditation Days</p>
              </div>

              <div className="rounded-2xl bg-yellow-50 p-5 text-center">
                <h3 className="text-3xl font-bold text-yellow-600">
                  120
                </h3>
                <p className="text-slate-600">Prayer Sessions</p>
              </div>

              <div className="rounded-2xl bg-green-50 p-5 text-center">
                <h3 className="text-3xl font-bold text-green-600">
                  18
                </h3>
                <p className="text-slate-600">Spiritual Lessons</p>
              </div>
            </div>

            {/* About */}
            <div className="mt-8 rounded-2xl border p-6">
              <h2 className="mb-3 text-xl font-semibold">
                About My Journey
              </h2>

              <p className="text-slate-600 leading-relaxed">
                Walking the path of self-discovery through meditation,
                mindfulness, gratitude, and spiritual teachings.
                Seeking inner peace and positive energy every day.
              </p>
            </div>

            {/* Favorite Practices */}
            <div className="mt-6 rounded-2xl border p-6">
              <h2 className="mb-4 text-xl font-semibold">
                Favorite Practices
              </h2>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-orange-100 px-4 py-2 text-orange-700">
                  🧘 Meditation
                </span>

                <span className="rounded-full bg-yellow-100 px-4 py-2 text-yellow-700">
                  🙏 Prayer
                </span>

                <span className="rounded-full bg-green-100 px-4 py-2 text-green-700">
                  📿 Mantra Chanting
                </span>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
                  🌿 Mindfulness
                </span>
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-6 rounded-2xl border p-6">
              <h2 className="mb-4 text-xl font-semibold">
                Spiritual Achievements
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-amber-50 p-4">
                  🏆 30-Day Meditation Streak
                </div>

                <div className="rounded-xl bg-orange-50 p-4">
                  🌟 First Prayer Challenge Completed
                </div>

                <div className="rounded-xl bg-green-50 p-4">
                  📖 10 Spiritual Lessons Finished
                </div>

                <div className="rounded-xl bg-blue-50 p-4">
                  ✨ Consistent Practice Badge
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 rounded-2xl bg-orange-100 p-6 text-center">
              <p className="text-lg italic text-slate-700">
                "Peace comes from within. Do not seek it without."
              </p>

              <p className="mt-2 text-sm text-slate-500">
                — Buddha
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}