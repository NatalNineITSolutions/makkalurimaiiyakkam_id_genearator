import { Link } from "react-router-dom";

export default function NotFoundView() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-red-700">404</h1>
        <p className="text-lg font-semibold">Page Not Found</p>
        <p className="text-sm text-gray-600">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="btn btn-red inline-block mt-4">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
