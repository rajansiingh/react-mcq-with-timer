/**
 * Author : rajansingh
 * Created On : 12/12/20
 */
import React, {Component} from 'react';

class DefaultLayout extends Component {
    render() {
        return (
            <main>
                <section className="mainLayout">
                    {this.props.children}
                </section>
            </main>
        );

    }
}

export default DefaultLayout;
