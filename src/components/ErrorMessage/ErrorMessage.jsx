export default function ErrorMessage({ error }) {
    return (
        <div>
        <p>Error: {error.message}</p>
        </div>
    );
}