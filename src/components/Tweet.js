import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatTweet} from './'

class Tweets extends Component{
    render(){
        return(

            <div className='tweet'>
            </div>

        )
    }
}

function mapStateToProps({authedUser, user, tweets},{id} ){

    const tweet = tweets[id]
    return {
        authedUser,
        tweet: format
    }

}

export default connect()(Tweet)