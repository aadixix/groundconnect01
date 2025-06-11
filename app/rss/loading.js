export default function Loading() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="animate-pulse">
                    {/* Header skeleton */}
                    <div className="text-center mb-12">
                        <div className="h-10 bg-gray-200 rounded-lg w-64 mx-auto mb-4"></div>
                        <div className="h-6 bg-gray-200 rounded-lg w-96 mx-auto"></div>
                    </div>

                    {/* Content skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-white rounded-lg shadow-sm p-6">
                                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
