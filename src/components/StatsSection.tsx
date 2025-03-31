const StatsSection = () => {
  return (
    <section className="bg-white py-12 px-4 border-t border-b border-gray-200">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-3xl font-bold text-primary">45</p>
          <p className="text-slate">Promises Made</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-green-600">12</p>
          <p className="text-slate">Kept</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-red-600">15</p>
          <p className="text-slate">Broken</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-accent">18</p>
          <p className="text-slate">In Progress</p>
        </div>
      </div>
    </section>
  )
}

export {StatsSection}