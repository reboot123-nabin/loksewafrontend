import * as FaIcons from 'react-icons/fa'

export const RewardPoints = (props) =>{
    return(
        <>
            <FaIcons.FaAward className="m-auto" />
            <span>{props.points}</span>
        </>
    )
}
