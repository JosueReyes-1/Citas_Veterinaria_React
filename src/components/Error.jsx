export const Error = ({mensaje}) => {
    return (
        <div className="mb-3 bg-red-700 text-center py-2">
            <a className="text-white">{mensaje}</a>
        </div>
    )
}
