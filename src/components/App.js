import React, {Component} from "react";
import {connect} from "react-redux";
import {addRecipe, removeFromCalendar} from "../actions";

class App extends Component {

    /**
     * If we do not want to use mapDispatchToProps, we can dispatch the action like this.
     * But mapDispatchToProps makes it more cleaner and splits the responsibility from writing everything into component
     */
    // doThing = () => {
    //     this.props.dispatch(addRecipe({}))
    // };

    render() {
        console.log(this.props);
        return (
            <div>
                Hello World
            </div>
        )
    }
}

function mapStateToProps({food, calendar}) {
    const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    return {
        calendar: dayOrder.map((day) => ({
            day,
            meals: Object.keys(calendar[day]).reduce((meals, meal) => {
                meals[meal] = calendar[day][meal]
                    ? food[calendar[day][meal]]
                    : null;

                return meals
            }, {})
        })),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectRecipe: (data) => dispatch(addRecipe(data)),
        remove: (data) => dispatch(removeFromCalendar(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)