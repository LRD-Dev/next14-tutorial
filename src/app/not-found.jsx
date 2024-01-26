
import Link from 'next/link';

const NotFound = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>SORRY - The page you are looking for does not exist.</p>
            <Link href="/">Go back home</Link>
        </div>
    );
};

export default NotFound;