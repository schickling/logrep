import { connect } from 'react-redux'
//import { toggle } from '../actions'
import List from '../components/List'

const getVisibles = (messages, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return messages.slice(-100)
      //return messages.slice(0, 10)
    //case 'SHOW_COMPLETED':
      //return messages.filter(t => t.completed)
    //case 'SHOW_ACTIVE':
      //return messages.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    messages: getVisibles(state.messages, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      //dispatch(toggle(id))
    }
  }
}

const VisibleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default VisibleList
