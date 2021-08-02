import * as FaIcons from 'react-icons/fa'

export const RewardPoints = (props) => {
    return (
        <>
            <div className="row reward_div mx-3">
                <div className="col-md-3 mt-2">
                    <FaIcons.FaAward className="m-auto" />
                </div>
                <div className="col-md-9 mx-auto">
                    <div className="row">
                        <small className="rp_text pt-1">Quiz Points</small>
                    </div>
                    <div className="row">
                        <small className="d-block px-3">{props.points}</small>
                    </div>
                </div>
            </div>
        </>
    )
}
