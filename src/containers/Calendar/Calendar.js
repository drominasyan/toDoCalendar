/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import toDoActions from '../../redux/toDoList/actions';
import { generateCalendarDates, calculateToDoPropertiesByDay } from '../../Helpers/utility';
import './calendarStyle.css';


class Calendar extends PureComponent {
    // Methods
    openListPage = (e) => {
        const { history, currentDayRefrash } = this.props;
        //Getting Data attribute as day
        const { id } = e.target.dataset;
        // Action creator updates the current day
        currentDayRefrash(+id);
        history.push('./toDoList');
    }

    //Renders
    renderCalendar = () => {
        //Generating dates from APR 1 to 30
        const dates = generateCalendarDates();
        const { entities } = this.props;
        //  Calculating To Do and Comleted Counts
        const calcByID = (id) => calculateToDoPropertiesByDay(entities, id);
        return dates.map(item => (
            <div
                className={`${calcByID(+item.key).count && 'highlited'} calDataBlock`}
                key={item.key}
                data-id={item.key}
                onClick={this.openListPage}
            >
                {item.key}
                <div className="hidden">
                    {`${calcByID(+item.key ).count} to do items (${calcByID(+item.key ).incomplateCount} of which incomplate)`}
                </div>
            </div>
        ));
    }

	render() {
		return (
            <div className= "calendar">
                {this.renderCalendar()}
            </div>
		);
    }
}

// Checking Proptypes.
Calendar.propTypes = {
    currentDayRefrash : PropTypes.func.isRequired,
    entities            : PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    const { listReducer : { entities } } = state;
    return {
        entities,
    };
}

const mapDspatchToProps = {
    currentDayRefrash : toDoActions.currentDayRefraash,
};


export default connect(mapStateToProps, mapDspatchToProps)(withRouter(Calendar));
