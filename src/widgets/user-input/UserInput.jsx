import './userInput.css'
function UserInput({number, type,day,month}) {
    return (
        <div className='user-input--container'>
            <h6 className='user-input--container-item'>Type:<span className='user-input--span'>{type}</span></h6>
            {
                type === 'date' ? <>
                    <h6 className='user-input--container-item'>Day:<span className='user-input--span'>{day}</span></h6>
                    <h6 className='user-input--container-item'>Month:<span className='user-input--span'>{month}</span></h6></> :
                    <h6 className='user-input--container-item'>Number:<span className='user-input--span'>{number}</span></h6>
            }
        </div>
    )
}

export default UserInput