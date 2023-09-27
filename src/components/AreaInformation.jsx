export const AreaInformation = ({ information = [], fileName = "", AreaName = "" }) => {
    return (

        <div className="container mx-auto flex items-leftr justify-left">
            <div className='mx-10'>
                <strong><span>{ AreaName } </span> </strong>
            </div>
            <div className='mx-10'>
                <span>{ fileName } </span>
            </div>
            {information.map((elements, index) => (
                <div key={ index } className="mx-3 text-xs">
                    <span> { elements } </span>
                </div>
            ))}
            
        </div>

    );

}
export default AreaInformation