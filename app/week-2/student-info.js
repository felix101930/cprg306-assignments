import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div>
            <h2>Name: Felix Montanez</h2>
            <p>
                Github: <Link href="https://github.com/felix101930/" className="underline">
                    https://github.com/felix101930/
                </Link>
            </p>
        </div>
    );
}