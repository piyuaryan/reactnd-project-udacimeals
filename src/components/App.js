import React, {Component} from "react";
import {connect} from "react-redux";

class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                Hello World
            </div>
        )
    }
}

// map redux state to Component props
function mapStateToProps(calendar) {
    const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    return {
        calendar: dayOrder.map((day) => ({
            day,
            meals: Object.keys(calendar[day]).reduce((meals, meal) => {
                meals[meal] = calendar[day][meal]
                    ? calendar[day][meal]
                    : null;

                return meals
            }, {})
        })),
    }
}

// to connect app component to redux store to get our calendar state inside of redux-store
export default connect(
    mapStateToProps,
)(App)