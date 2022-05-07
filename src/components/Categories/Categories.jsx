import './Categories.css'

const Categories = () => {
    return (
        <div className="flex-row-sb-start p-1">
            <button className="text-regular chips m-sm p-sm">
                Healthcare
            </button>
            <button className="text-regular chips m-sm p-sm">
                Training
            </button>
            <button className="text-regular chips m-sm p-sm">
                Adoption
            </button>
        </div>
    )
}

export {Categories}